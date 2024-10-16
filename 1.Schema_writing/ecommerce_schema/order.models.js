import mongoose from "mongoose";


const orderItmesSchema=new mongoose.Schema({
  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Product',
    
  },
  quantity:{
    type:Number,
    requirde:true
  }
});

const orderSchema=new mongoose.Schema({
  orderPrice:{
    type:Number,
    required:true
  },
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  },
  orderItems:{
    type:[orderItmesSchema],
  },
  address:{
    type:String,
    required:true
  },
  status:{
    type:String,
    enum:["PENDING",'CANCELLED','DELIVERED'],
    default:'PENDING'
  }


},{timestampstrue})

export const Order = mongoose.model("Order",orderSchema);