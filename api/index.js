import express from "express";
import mongoose from "mongoose";
const app=express();
import dotenv from "dotenv"

dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongo");
})
.catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log("server runingg!")
});