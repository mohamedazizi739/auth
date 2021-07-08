const validator = require("email-validator");
exports.register=(req,res,next)=>{
 const {email,name,password}=req.body
 if(!name||!email||!password){
    return(res.status(402).json({msg:"complete all fields"}))
 }
 if(!validator.validate(email)){
  return(res.status(403).json({msg:"email not valid"}))
 }
 if(password.length<4){
  return(res.status(402).json({msg:"password length must be >3"}))
 }
 next()
}

exports.login=(req,res,next)=>{
 const {email,name,password}=req.body
 if(!email||!password){
    return(res.status(402).json({msg:"complete all fields"}))
 }
 if(!validator.validate(email)){
  return(res.status(403).json({msg:"email not valid"}))
 }

 next()
}