const express = require('express');
const User = require('../models/User');
const router = express.Router();


//create a user using :  post'/api/auth'
router.get('/',(req,res)=>{
   console.log(req.body);
   const user = User(req.body);
   user.save()
   res.send(res.body);
  

})
module.exports = router 