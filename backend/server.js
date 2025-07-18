
import express from 'express'

import doetenv from 'dotenv';

import cookieParser from 'cookie-parser';


doetenv.config();

import connectDB from './config/db.js'

import { notFound,errorHandler } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js'

import userRoutes from './routes/userRoutes.js'

import orderRoutes from './routes/orderRoute.js'


const port = process.env.PORT || 5000;



// Connect to MongoDB
connectDB();

const app = express();

// Body parser middleware 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.get('/', (req,res)=>{
    res.send('API IS CALLING')

});

app.use('/api/products', productRoutes)

app.use('/api/users', userRoutes)

app.use('/api/orders', orderRoutes)

app.use(notFound);
app.use(errorHandler);



app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`)
})
