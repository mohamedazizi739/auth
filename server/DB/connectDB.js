const mongoose=require('mongoose')
require('dotenv').config()

const connectDB=()=>{
 mongoose.connect(process.env.mongoUrl,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log('dataBase is connected')).catch(()=>console.log('dataBase connection failed'))
}

module.exports=connectDB