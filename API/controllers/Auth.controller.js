import User from "../models/User.model";
import bcryptjs from "bcryptjs"
export const SignUp=async(req,res)=>{
    const {username,email,password}=req.body;

    if(!username || !email || !password || username ===""||email===''||password===''){
        return res.status(400).json({message:"all field is required"})
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
        res.status(500).json({message:error.message})
        
    }

};