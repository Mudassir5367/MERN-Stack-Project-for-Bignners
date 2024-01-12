const express = require('express')
const router = express.Router()
require('../db/connection')
const User = require('../model/userSchema')

router.get('/', (req, res)=>{
    res.send('Hellow')
})

router.post('/register', (req, res)=>{
    // console.log(req.body);
    // res.json({msg:req.body})
    const {name, email, phone, work, password, cpassword} = req.body;
    console.log(name);
    if(!name || !email || !phone || !work || !password || !cpassword){
        res.json({error:'Please filled the field'})
    }

    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            res.json({error:'Please filled the field'})
        }

        const user = new User({name, email, phone, work, password, cpassword})
        user.save().then(()=>{
            res.json({msg:'users registered'})
        }).catch((error)=>{
            res.json({error:'failed to registered'})
        })
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;