import mongoose from "mongoose";
import { Category } from "./category.models";

const productSchema=new mongoose.Schema({
  
  description:{
  type:String,
  required:true,

  },
  name:{
  type:String,
  required:true,
  },
  productImage:{
     type:String
  },
  price:{
    type:Number,
    default:0
  },
  stock:{
    type:Number,
    default:0
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true,
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    
  }


},{timestampstrue});

export const Product = mongoose.model("Product",productSchema);