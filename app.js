import express from "express";
import { config } from "dotenv";
import cors from 'cors'
config({
  path: "./config/config.env",
});
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser())
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true,
  methods:['GET','POST','PUT','DELETE'],
  
}))
import { errorMiddleware } from "./middleware/error.js";
import course from "./routes/courseRoutes.js";
import payment from "./routes/paymentRoutes.js";
import  other from "./routes/otherRoutes.js";

import user from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

app.use("/api/v1", course);
app.use("/api/v1", user);
app.use("/api/v1", payment);
app.use("/api/v1", other);

app.get('/',(req,res)=>res.send(`<h1>Site It's Working .To Visit Frontend -Click <a href=${process.env.FRONTEND_URL}>Here</a></h1>`))
export default app;
app.use(errorMiddleware);
