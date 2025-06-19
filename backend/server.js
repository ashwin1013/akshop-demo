
import express from 'express'

import doetenv from 'dotenv';
doetenv.config();

import connectDB from './config/db.js'

import { notFound,errorHandler } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js'



const port = process.env.PORT || 5000;



// Connect to MongoDB
connectDB();

const app = express();

app.get('/', (req,res)=>{
    res.send('API IS CALLING')

});

app.use('/api/products', productRoutes)

app.use(notFound);
app.use(errorHandler);



app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`)
})
