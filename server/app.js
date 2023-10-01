const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({path:"./config.env"});

const port = process.env.PORT || 5000;

app.use(require("./route/auth"));

if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'){
    app.use(express.static('client/build'));
    const path = require("path");
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    })
}
// app.use(express.json());

// app.post("/register",async (req,res) => {
//     try{
//         const pass = req.body.password;
//         const cpass = req.body.confirmPassword;
//         if(pass===cpass){
//             const regUser = new Users({
//                 username: req.body.username,
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: pass,
//                 confirmPassword: cpass
//             })
//             const registered = await regUser.save();
//             res.status(201).render("index");
//         }else{
//             res.send("Password not matching.");
//         }
//     }catch(e){
//         console.log(e);
//     }
// })

// app.post("/login",async (req,res)=>{
//     try{
//         const us = req.body.username;
//         const pass = req.body.password;

//         const usName = await Users.findOne({username:us});
//         if(usName.password === pass){
//             res.status(201).render("index");
//         }else{
//             res.send("Password are not matching");
//         }
//     }catch(e){
//         console.log(e);
//     }
// })

// app.listen(port , () => {
//     console.log(`Server running at ${port}`);
// });