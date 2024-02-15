// imports 
const express=require("express")
const cors=require('cors')
const mongoose= require('mongoose')
require("dotenv").config();

const app=express()
// middlewares 
app.use(express.json());
app.use(cors({
    methods:["POST,GET"],
    withCredentials:true
}))

//connect  to database 
mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB CONNECTED SUCCESSFULLY")
}).catch((err)=>{
    console.log(err.message)
});

//port  activation message
app.listen(4000,()=>{

    console.log("server running on port 4000")
})