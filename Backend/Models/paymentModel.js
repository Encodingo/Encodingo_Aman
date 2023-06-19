import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        required:true,
    },
    userPhone:{
        type:Number,
        required:true,
    },
    razorpayOrderId:{
        type:String,
        required:true,
    },
    razorpayPaymentId:{
        type:String,
        required:true,
    },
    razorpaySignature:{
        type:String,
        required:true,
    }

});
export const Payment=mongoose.model('Payment',paymentSchema);