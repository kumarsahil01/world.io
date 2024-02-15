// imports 
const express=require("express")
const cors=require('cors')
const mongoose= require('mongoose')
require("dotenv").config();
const cookieparser=require("cookie-parser")
const authRoutes=require('./Routes/AuthRoutes')

const app=express()
// middlewares 
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST",
        credentials: true
    })
)
//connect  to database 
mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB CONNECTED SUCCESSFULLY")
}).catch((err)=>{
    console.log(err.message)
});
app.use(cookieparser())
app.use(express.json());
app.use("/",authRoutes)

//port  activation message
app.listen(4000,(err)=>{
    if (err) {
        console.log(err);
      } else {
        console.log("Server Started Successfully.");
      }
})