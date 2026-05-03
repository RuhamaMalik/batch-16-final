import express from 'express'; 
import dotenv from 'dotenv';
import dbConnection from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from "cors";
  
const app = express();
dotenv.config();
dbConnection();

////// midddleware
app.use(express.json());
app.use(cors());


///// routes

app.use('/api/auth', authRoutes)

app.listen(process.env.PORT, ()=>console.log(`Server is running on port ${process.env.PORT}`));