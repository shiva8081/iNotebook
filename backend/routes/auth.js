const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_secret="shivaloginadmin";


//create a user using :  post'/api/auth/create'
router.post('/createuser', [
    body('email','enter a valid name').isEmail(),
    body('name','enter a valid email').isLength({ min: 5 }), 
    body('password','password must be longer then 5').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let user =await  User.findOne({email:req.body.email})
    if(user){
        return res.status(400).json({error:'mail already exist'})
    }
    const salt= await bcrypt.genSalt(10);
    const secpass= await bcrypt.hash(req.body.password,salt);

   const data= await User.create({
        name: req.body.name,
        password: secpass,
        email: req.body.email, 
      })
    // console.log(data);
     const data1={
       id:data.id
    }
    const jswdata=jwt.sign(data1,JWT_secret)
    console.log(jswdata)
    // res.json()

res.status(200).send({jswdata})
})
// authenticate a user using post"/api/auth/login
router.post('/login', [
    body('email','enter a valid name').isEmail(),
    body('password','password cant be blank').exists()
],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const{email,password}=req.body;
    try {
        let user= await User.findOne({email});
        if(!user){
            return res.status(400).json({error:'invalid attempt'})
        }
        const comparepass=await bcrypt.compare(password,user.password);
        if(!comparepass){
            return res.status(400).json({error:'invalid attempt'})
        }
        const data1={
            id:user.id
         }
         const jswdata=jwt.sign(data1,JWT_secret)
console.log("token generated:",jswdata);
res.status(200).send({token:jswdata})
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
}
)



module.exports = router 