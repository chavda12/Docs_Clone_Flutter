const express = require('express');
const User = require("../models/user")
const auth = require("../middlewares/auth.middleware")
const jwt = require("jsonwebtoken");

const authRouter = express.Router();

authRouter.post("/api/signup",async (req,res) => {
    try {
     
        const {name,email,profilePic} = req.body ;

        //email already exists?
        let user = await User.findOne({email});
        

        if(!user){
            user = new User({
                email,profilePic,name
            });

            user = await user.save();
        }

        res.json({user,token:jwt.sign({
            'id':user._id
        },'passwordKey')});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
    }
});     

authRouter.get("/",auth,async (req,res)=>{
    const user = await User.findById(req.user);
    res.json({user,token: req.token});
});

module.exports = authRouter ;