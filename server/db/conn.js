const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");


dotenv.config({path:"./config.env"});


mongoose.connect(process.env.DB).then( () => console.log("Success")).catch( (err) => console.log(err));

const users = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    confirmPassword:{
        type: String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required: true
            }
        }
    ]
    
});

users.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
    }
    next();
})

users.methods.generateAuthToken = async function() {
    try {
        let token = jwt.sign({_id:this._id},process.env.SECRETKEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const Users = new mongoose.model("User",users);
module.exports = Users;

