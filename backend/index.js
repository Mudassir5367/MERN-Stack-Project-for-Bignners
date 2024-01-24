// const dotenv = require('dotenv')
const express = require('express');
const app = express();
require('./db/connection')
const User = require('./model/userSchema')

// const port = process.env.PORT || 5000;
// dotenv.config({ path: './config.env' });
const port = 5000;


// middleware
app.use(express.json())
app.use(require('./routes/auth'))

const middleware = (req, res, next)=>{
console.log('Hello my middleware');
next();
}
// middleware()

app.get('/', (req, res)=>{
    res.send('Hellow from Home Page')
})

app.get('/about', middleware,(req, res)=>{
    console.log('Hello my About ');
 })

app.get('/contact', (req, res)=>{
    // res.cookie('cookieName', 'cookieValue')
    res.send('Hellow from Contact Page')
})

// app.get('/signin', (req, res)=>{
//     res.send('Hellow from Login Page')
// })

app.get('/signup', (req, res)=>{
    res.send('Hellow from Signup Page')
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})