const mongoose = require('mongoose');

// db connection
// const DB = process.env.DATABASE; 
const DB = 'mongodb+srv://mudassirhussain:mern-project-2@cluster0.epcsdj1.mongodb.net/mern-project-thapa?retryWrites=true&w=majority' 
mongoose.connect(DB, {}).then(() => {
    console.log('Connected');
}).catch((error) => {
    console.log(error, 'not connected');
});
