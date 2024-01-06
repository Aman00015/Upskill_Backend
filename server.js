import app from "./app.js";
import { connectDB } from "./config/database.js";
import cloudinary from 'cloudinary'
import Razorpay from 'razorpay'
import nodeCron from 'node-cron'
import { StatsModel } from "./models/StatsModel.js";
connectDB();


cloudinary.v2.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
})

export const instance=new Razorpay({
  key_id:process.env.RAZORPAY_API_KEY,
  key_secret:process.env.RAZORPAY_API_SECRET
})

nodeCron.schedule('0 0 0 1 * *',async()=>{
  try {
    await StatsModel.create({})
  } catch (error) {
    console.log(error);
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server Working on Port:${process.env.PORT}`);
});
