const express = require('express')

const users = require('../controllers/user.controller.js');

const auth = express.Router()

auth.post('/login', users.login)
// auth.post('/login', (req, res)=>{

//     res.send("Receive !!!")


// })
// console.log(auth)
module.exports = {auth}