import express from 'express'

const router = express.Router();

import {
    addOrderItems,
        getMyOrdes,
        getOrderById,
        updateOrderToPAid,
        updateOrderToDeliver,
        getOrders,
    

} from '../controllers/orderControllers.js'

import { protect,admin } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems).get(protect,admin,getOrders);

router.route('/mine').get(protect, getOrders);

router.route('/:id').get(protect,admin, getOrderById)

router.route('/:id/pay').put(protect, updateOrderToPAid)

router.route('/:id/deliver').put(protect, admin,updateOrderToDeliver)







export default router;




