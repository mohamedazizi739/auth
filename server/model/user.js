const mongoose = require('mongoose')
const {Schema,model}=mongoose
const userSchema=new Schema({
 name:{required:true,type:String},
 email:{required:true,type:String},
 password:{required:true,type:String}
})

const user = model('user', userSchema);
module.exports=user
