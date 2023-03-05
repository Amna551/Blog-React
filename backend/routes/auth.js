const router = require('express').Router();
const User =require('../models/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const secretkey="secretkey"

//register a new user
router.post('/register',async(req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass= await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email:req.body.email,
            password:hashedPass
        })
        const user =await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error)
    }
})
 //login 

router.post('/login',(req,res)=>{
jwt.sign({User},secretkey,{expiresIn:'300s'},(error,token)=>{
res.json({
    token
})
})
})

router.post('/profile',verifyToken,(req,res)=>{
jwt.verify(req.token,secretkey,(error,authData)=>{
    if(error){
        res.send({result:"Invalid token"})
    }else{
        res.json({
            message:"Profile accessed",
            authData
        })
    }
})
})

function verifyToken(req,res,next){
const bearerHeader=req.headers['authorization'];
if(typeof bearerHeader!=='undefined'){
const bearer=bearerHeader.split(" ");
const token = bearer[1];
req.token=token;
next();
}else{
    res.send({
        result:'Token is not valid'
    })
}
}

module.exports =router