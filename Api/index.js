import express from 'express';
import path from "path";
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';
import messageRoutes from "./routes/message.routes.js";
import cookieParser from 'cookie-parser';
import userRoutes from './routes/user.routes.js'
import { app, server } from "./socket/socket.js";

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
    console.log("not connected to db ");
});

const __dirname = path.resolve();
const port = 5000
app.use(express.json());
app.use(cookieParser());



app.use('/api/auth', authRouter);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});


server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.use((err,rq,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';
    return res.status(statusCode).json({
      succes:false,
      statusCode,
      message,
    });
  });