import mongoose from "mongoose";

// defining the schema 

const userSchema=new mongoose.Schema({

username:{
  type:String,
  required:true,
  unique:true,
  lowercase:true
},
email:{
  type:String,
  required:true,
  unique:true,
  lowercase:true
},

password:{
type:String,
required:true,

}


},{timestamps:true})

export const User = mongoose.model("User",userSchema);