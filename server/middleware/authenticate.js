const jwt = require('jsonwebtoken');
const Users = require("../db/conn");

const Authenticate = async (req,res,next) => {
    try {
        const token = req.cookies.jwtoken;
        const vToken = jwt.verify(token, process.env.SECRETKEY);
        
        const rUser = await Users.findOne({_id:vToken._id,"tokens.token":token});
        if(!rUser){
            throw new Error('User not found');
        }
        req.token = token;
        req.rUser = rUser;
        req.UserID = rUser._id;
        next();
    } catch (error) {
        res.status(401).send('Unauthorised: No Token Provided')
        console.log(error);
    }
}

module.exports = Authenticate;