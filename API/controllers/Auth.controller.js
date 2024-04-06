import User from "../models/User.model.js";
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utilis/error.js";
export const SignUp=async(req,res,next)=>{
    const {username,email,password}=req.body;

    if(!username || !email || !password || username ===""||email===''||password===''){
        next(errorHandler(400,'All field are required'));
    }
    const hashedPassword=bcryptjs.hashSync(password,10)
    const newuser=new User({
        username,
        email,
        password:hashedPassword
    });
    try {
        await newuser.save();
    res.json("sign up is successfully")
        
    } catch (error) {
        next(error);
    }

};