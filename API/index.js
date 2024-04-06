import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoutes from './routes/User.routes.js'
import AuthRoutes from "./routes/Auth.route.js"
dotenv.config();


mongoose.connect(
    process.env.MONGODB
)
.then(()=>{
    console.log('mongodb is connected');
})

.catch((err)=>{
    console.log(err);
})

const app=express();
app.use(express.json())

app.listen(3000,()=>{
    console.log('server is running on port 3000 !');
});
app.use('/API/user',userRoutes);
app.use('/API/Auth',AuthRoutes);