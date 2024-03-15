const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


//create a user using :  post'/api/auth'
router.post('/createuser', [
    body('email','enter a valid name').isEmail(),
    body('name','enter a valid email').isLength({ min: 5 }), 
    body('password','password must be longer then 5').isLength({ min: 5 })
], async (req, res) => {
 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // res.send(req.body)
    res.send(req.body);
    let user =await  User.findOne({email:req.body.email})
    if(user){
        return res.status(400).json({error:'mail already exist'})
    }
    user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email, 
      })
      
    //   .then(user => res.json(user))
    //   .catch(err=>{console.log(err)
    // res.json({error:'please enter s unique email'})})


})

module.exports = router 