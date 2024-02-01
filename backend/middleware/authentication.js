const jwt = require('jsonwebtoken')
const User = require('../model/userSchema')
const secretKey = 'SECRETKEY';

const autehntication = async(req, res, next) =>{
    try {
        
        const token = req.cookies.tokenData;
        const verifyToken = jwt.verify(token, secretKey)
        // console.log(verifyToken);

        const rootUser = await User.findOne({_id:verifyToken._id, 'tokens:token':token})
        // console.log(rootUser);

        if(!rootUser){ throw new Error('user not found')}

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        
        next()

    } catch (error) {
        
    }
}

module.exports = autehntication;