import express from 'express'

import doetenv from 'dotenv';
doetenv.config();

import products from './data/products.js';

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req,res)=>{
    res.send('API IS CALLING')

});

app.get ('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:id',(req,res)=>{

    const product = products.find((p)=> p._id === req.params.id)

    res.json(product)

})

app.listen(port,()=>{
    console.log(`Server is Running on port ${port}`)
})
