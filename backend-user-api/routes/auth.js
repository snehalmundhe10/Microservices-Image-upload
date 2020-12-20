const router = require('express').Router();
const users = require('../models/users');
const models = require('../models');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async(req,res) => {
 const id = uuidv4();
 //check if the user is present or not
 const emailExist = await models.users.findOne({where: { email: req.body.email}})
 if(emailExist) return res.status(400).send('Email exists');
 // Hash Passwords
 const salt = await bcrypt.genSalt(10);
 const hashedPassword = await bcrypt.hash(req.body.password, salt);
 //create a new user
 await models.users.create({
     id,
     name: req.body.name,
     email: req.body.email,
     password: hashedPassword
 });
 try{
     const savedUser = models.users.save();
     res.status(200).send(savedUser);
 }
 catch(err){
     res.status(500).send(err);
 }
});

//Login
router.post('/login', async (req,res)=>{
 //checking if the email exists   
 const user = await models.users.findOne({where: { email: req.body.email}})
 if(!user) return res.status(400).send('Email does not exist');
 // password is correct
 const validPass =  await bcrypt.compare(req.body.password, user.password);
 if(!validPass) return res.status(400).send('Invalid password');
 //create and assign token
 const token = jwt.sign({id: user.id}, 'ashashashashash');
 res.header('auth-token', token).send(token);
 console.log(token);
 console.log(user.name);
});

module.exports =  router;
