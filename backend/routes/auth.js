const express = require('express')
const router = express.Router()
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
    res.json({error:'plz filled the field'})
   }

   try {
    const existUser = await User.findOne({email:email})
     if(existUser){
     res.json({error:'user already exist'})
     }
     else if (!existUser){
        const user =  new User({name, email, phone, work, password, cpassword})
        await user.save()
            res.json({msg:'user data added in database'})
     }
     
   } catch (error) {
    console.log(error);
   }
  

})


router.post('/signin', async(req, res)=>{
    // console.log(req.body);
    // res.json({msg:'login success'})
    const {email, password} = req.body;

    if(!email || !password){
        res.json({error:'please filld the data'})
    }
    const userEmail = await User.findOne({email:email})
    console.log('userEmail :',userEmail);
    if(userEmail){
        res.json({msg:'signin'})
    }else{
        res.json({error:'user not login'})
    }
})
module.exports = router;