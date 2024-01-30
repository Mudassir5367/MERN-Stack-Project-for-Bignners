const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('../db/connection')
const User = require('../model/userSchema')


router.get('/', (req, res)=>{
    res.send('Hellow')
})

router.post('/register', async(req, res)=>{
    // console.log(req.body);
    // res.json({msg:req.body})
   const {name, email, phone, work, password, cpassword} = req.body;
   console.log(name);
   if(!name || !email || !phone || !work || !password || !cpassword ){
   return res.json({error:'plz filled the field'})
   }

   try {
    const existUser = await User.findOne({ email: email });

    if (existUser) {
      return res.json({ error: 'User already exists' });
    } else if (password !== cpassword) {
      return res.json({ error: 'Passwords do not match' });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      console.log('User data added to the database');
      return res.json({ msg: 'User data added to the database' });
    }
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
  

})

///////////// login /////////////

router.post('/signin', async(req, res)=>{
    // console.log(req.body);
    // res.json({msg:'login success'})
    const {email, password} = req.body;

    if(!email || !password){
        res.json({error:'please filld the data'})
    }
    const loginUser = await User.findOne({email:email})
    console.log('loginUser :',loginUser);
    if(loginUser){
        const isMatch = await bcrypt.compare(password, loginUser.password)
        // token 
        const token = await loginUser.generateAuthToken();
        // token with cookie
        res.cookie('jwtoken', token, {
            espires:new Date(Date.now() + 25892000000),
            httpOnly:true
        })
        console.log(token);
        if(isMatch){
            res.json({msg:'signin successful'})            
        }else{
            res.json({error:'Invalid Credentials'})
        }
    }else{
        res.json({error:'Invalid Credentials'})
    }
})
module.exports = router;