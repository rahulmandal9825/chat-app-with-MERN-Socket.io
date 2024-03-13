import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes.js';

dotenv.config();

const MONGO="mongodb+srv://rahulmandalzzz123:rahulmandal@chat-app.sv2giy6.mongodb.net/?retryWrites=true&w=majority&appName=chat-app"

mongoose.connect(MONGO).then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
    console.log("not connected to db ");
});

const app = express()
const port = 3000
app.use(express.json());


app.use('/api/auth', authRouter);

app.listen(port, () => {
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