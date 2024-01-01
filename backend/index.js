const express = require('express')
const app = express();
const port = 5000;


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
    res.send('Hellow from About Page')
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