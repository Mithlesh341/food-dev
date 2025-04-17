import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false})

// we have provided minimize false so that this cart entry
//can be created without any data

const userModel = mongoose.model.user || mongoose.model("user", userSchema);
export default userModel;