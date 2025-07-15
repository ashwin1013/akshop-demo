import { toFormData } from 'axios';
import asynHandler from '../middleware/asyncHandler.js'

import Order from'../models/orderModel.js'


    // @desc  CreateOrder
    //@route  POST/api/orders
    //@access Private

    const addOrderItems= asynHandler (async(req , res) =>{
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice

        }=req.body;

        if (orderItems && orderItems.length === 0 ) {
            res.status(400);
            throw new  Error ('NO orders items');
        }else{
            const order = new Order ({
                orderItems: orderItems.map((x) =>({
                    ...x,
                    product : x._id,
                    _id : undefined
                })),
                user :req.user._id,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                totalPrice,
                shippingPrice,
                taxPrice,
        
            });

            const createdOrder =await order.save();
            res.status (201).json(createdOrder);
        }
    })


    // @desc  Get logged in user orders
    //@route  GET/api/orders/myorders
    //@access Private

    const getMyOrdes= asynHandler (async(req , res) =>{
        const orders =await Order.find ({user:req.user._id});
        res.status(200).json(orders);
    })



    // @desc  Get order by Id
    //@route  GET/api/orders/:id
    //@access Private

    const getOrderById= asynHandler (async(req , res) =>{
        const order = await Order.findById(req.params.id).populate('user','name email');

        if (order) {
            res.status (200).json(order);

        }else{
            res.status(404);
            throw new Error ('Order not found');
        }
    })


    // @desc  Get update ordet to paid
    //@route  GET/api/orders/:id/pay
    //@access Private

    const updateOrderToPAid= asynHandler (async(req , res) =>{
        res.send (  'update order to paid');
    })



    // @desc update order to delivered
    //@route  GET/api/orders/:id/deliver
    //@access Private/Admin

    const updateOrderToDeliver= asynHandler (async(req , res) =>{
        res.send (  'update order to deliver');
    })

 
    // @desc  Get order by Id
    //@route  GET/api/orders
    //@access Private/Admin

    const getOrders= asynHandler (async(req , res) =>{
        res.send (  'Get all orders');
    })


    export {
        addOrderItems,
        getMyOrdes,
        getOrderById,
        updateOrderToPAid,
        updateOrderToDeliver,
        getOrders,

    };