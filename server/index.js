const express=require("express")
const cors=require('cors')
const connectDB=require('./DB/connectDB')
const app=express()
connectDB()
app.use(cors())
app.use(express.json())
app.use('/api',require('./routes/user'))
const port=process.env.PORT||5000


app.listen(port,(err)=>err?console.log('server failed'):console.log(`server is runing on port ${port}`))




