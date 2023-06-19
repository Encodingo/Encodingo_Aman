import Razorpay from 'razorpay';
import crypto from 'crypto';
import {User} from "../Models/userModel.js";
import dotenv from 'dotenv';
dotenv.config({ path: './config/config.env' });

const instance= new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});




import {Payment} from "../Models/paymentModel.js";

console.log(process.env.RAZORPAY_API_KEY);


export const checkout= async (req,res,next)=>{
  try{
    const options = {
        amount: Number(req.body.price*100),  
        currency: "INR"
      }
      const order= await instance.orders.create(options)
       
       res.status(200).json({
        success:true,
        order
        
       });
       console.log(order);
       
       
      }
      catch(ex){
        next(ex);
      }
};

export const paymentverification = async (req,res,next)=>{
  
  try{
    const userName=req.query.userName;
    const id=req.query.id;
    const userEmail=req.query.userEmail;
    const userPhone=req.query.mobileNumber;
    console.log(id,userEmail,userName,userPhone);
    
    
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;

    const body=razorpay_order_id + "|" + razorpay_payment_id;

  
  const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
                                  .update(body.toString())
                                  .digest('hex');
                                  
                                  
  const isauthentic= expectedSignature===razorpay_signature;

  console.log(isauthentic);
  
 
  if(isauthentic){
    
    const userpayment =new  Payment({
      userName,
      userEmail,
      userPhone,
      razorpayOrderId:razorpay_order_id,
      razorpayPaymentId:razorpay_payment_id,
      razorpaySignature:razorpay_signature
    });
    await userpayment.save();
    await User.findOneAndUpdate({email:userEmail},
      {$push:{myCourses:id}}
      ,{returnOriginal:false}).then(value=>{
        console.log(value.myCourses);
      }).catch(error=>{
        console.log(error);
      });
    res.redirect(`http://localhost:3000/user_dashboard`);
  }
  else{
    res.status(400).json({
        success:false,
    })
  }


  // if(isauthentic){

  //   res.redirect('http://localhost:3000/paymentsuccess?reference='.razorpay_payment_id);

  // }
  // else{
  //   res.status(400).json({
  //       success:false,
  //   })
  // }
  
}
catch(ex){
  next(ex);
}
    
}
    
  
console.log(process.env.RAZORPAY_API_KEY);

export const getkey = (req,res)=>{
    res.status(200).json({key:process.env.RAZORPAY_API_KEY,status:true})
}


