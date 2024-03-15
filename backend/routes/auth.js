const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


//create a user using :  post'/api/auth'
router.post('/', [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }), 
    body('password').isLength({ min: 5 })
], (req, res) => {
    // console.log(req.body);
    // const user = User(req.body);
    // user.save()
    // res.send(req.body);
    if (result.isEmpty()) {
        const data = matchedData(req);
        return res.send(`Hello, ${data.person}!`);
    }
    // res.send(req.body)
    res.send({ errors: result.array() });


})
module.exports = router 