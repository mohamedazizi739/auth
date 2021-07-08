const express=require('express')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const user=require('../model/user') 
const Router = express.Router();
const {register,login}=require('../middlewares/user')
Router.post('/user/register',register,async(req,res)=>{
   const {email,name,password}=req.body
   const searchUser=await user.findOne({email}).exec()
   if(searchUser){
    return(res.status(401).json({msg:"user already exist"}))
   }
   const hashedPassword=await bcrypt.hash(password, 10)
   user.create({email,name,password:hashedPassword},(err)=>{
    if(err){
     return(res.status(501).json({msg:"add user failed"}))
    }
    res.json({msg:"add user succeed"})
   })

})
Router.post('/user/login',login,async(req,res)=>{
  try {
    const {password,email}=req.body
  const searchUser=await user.findOne({email}).exec()
   if(!searchUser){
    return(res.status(401).json({msg:"user does not exist"}))
   }
   const checkPassword=await bcrypt.compare(password, searchUser.password)
   if(checkPassword){
    const token = await jwt.sign({ email }, process.env.tokenKey, { expiresIn: '200h' });
    return(res.json({token}))
   }else{
    return(res.status(402).json({msg:"wrong password"}))
   }
  } catch (error) {
   return(res.status(502).json({msg:"login failed"}))
  }
 
})

Router.get("/user/auth",async(req,res)=>{
   try {
     console.log("yy",req.headers.authorization)
    const token=req.headers.authorization
    const tokenVerify=await jwt.verify(token,process.env.tokenKey)
    res.json({msg:'isAuth'})
   } catch (error) {
    res.status(503).json({msg:"auth failed"})
   }
})

module.exports=Router
