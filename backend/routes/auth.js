const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('../db/connection')
const User = require('../model/userSchema')
const autehntication = require('../middleware/authentication')


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

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
      return res.status(400).json({ error: 'Please fill all the fields' });
  }

  try {
      const loginUser = await User.findOne({ email: email });

      if (loginUser) {
          const isMatch = await bcrypt.compare(password, loginUser.password);

          if (isMatch) {
              const token = await loginUser.generateAuthToken();
              res.status(200).json({ token });
              console.log('signin successful');
          } else {
              res.status(400).json({ error: 'Invalid Credentials' });
          }
      } else {
          res.status(400).json({ error: 'Invalid Credentials' });
      }
  } catch (error) {
      console.error('Error during signin:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


//////// About Page ///////////
router.get('/about', autehntication, (req, res)=>{
  console.log('Hello my About ');
  res.send(req.rootUser)
})

module.exports = router;