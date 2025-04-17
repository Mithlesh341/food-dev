import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import validator from "validator"
// import isEmail from "validator/lib/isEmail.js";

//LOG IN USER
const loginUser = async (req, res) =>{
  const {email, password} = req.body;
  try{
    const user = await userModel.findOne({email})
    if(!user){
        return res.json({success:false, message:"User does not exist"})
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
       return res.json({success:false, message:"Invalid Credentials"})
    }
    const token = createToken(user._id);
    res.json({success:true,token})

  }catch (error){
    console.log(error);
    res.json({success:false, message:"Error"})
    
  }
}

//This id is self generated
const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//REGISTER USER
const registerUser = async (req, res) =>{
    const {name, password, email} = req.body;
    try{

       //  checking if user already exist
      const exists = await userModel.findOne({email});
      if(exists){
        return res.json({success:false, message:"User already exists"})
      }

      //validating email format and strong password
      if (!validator.isEmail(email)) {
        return res.json({success:false, message:"Please enter a valid email"})
      }

      if (password.length < 8) {
        return res.json({success:false, message:"Please enter a strong password"})
      }

       //HASHING USER PASSWORD
       //RANGE of gensalt is 5 to 15
       const salt = await bcrypt.genSalt(10)
       const hashedPassword = await bcrypt.hash(password,salt);

       const newUser = new userModel({
        name:name,
        email:email,
        password:hashedPassword
       })
        
       //For saving user data
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true, token});

    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

export {loginUser, registerUser}