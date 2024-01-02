const express = require('express');
const { Db } = require('mongodb');
const mongoose = require('mongoose')
const app = express();
const port = 5000;


// db connection
const DB = 'mongodb+srv://mudassirhussain:mern-project-2@cluster0.epcsdj1.mongodb.net/mern-project-thapa?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>{
    console.log('Connected');
}).catch((error)=>{
    console.log(error,'not connected');
})
// middleware

const middleware = (req, res, next)=>{
console.log('Hello my middleware');
next()
}
// middleware()

app.get('/', (req, res)=>{
    res.send('Hellow from Home Page')
})

app.get('/about', middleware,(req, res)=>{
    console.log('Hello my About ');
 })

app.get('/contact', (req, res)=>{
    res.send('Hellow from Contact Page')
})

app.get('/signin', (req, res)=>{
    res.send('Hellow from Login Page')
})

app.get('/signup', (req, res)=>{
    res.send('Hellow from Signup Page')
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})