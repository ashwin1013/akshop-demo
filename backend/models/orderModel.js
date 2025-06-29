import mongoose from "mongoose";

const orderSchema = mongoose.Schema({


    user : {
        type:mongoose.Schema.Types.ObjectId,
        required :true,
        ref : "User",
    },

    otderItems : [{
        name : {type : String,required:true},
        qty : {type : Number,required:true},
        image : {type : String,required:true},
        price : {type : Number,required:true},

        product : {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Product",
        },
    }
    ],
    shippingAddress : {
        address:{type:String,required:true},
        city:{type:String,required:true},
        postalCode:{type:String,required:true},
        country:{type:String,required:true},
    },
    paymentMetod : {
        type:String,
        required:true
    },
    paymentResult: {
        id : {type:String},
        status : {type:String},
        update_time : {type:String},
        email_address : {type:String},

    },
    itemsPrice:{
        type:String,
        required:true,
        default:0.0,

    },

    taxPrice:{
        type:Number,
        require:true,
        efault:0.0,
    },
    shippingPrice:{
        type:Number,
        require:true,
        efault:0.0,
    },
    totalPrice:{
        type:Number,
        require:true,
        default:0.0,

    },
    isPaid:{
        type:Boolean,
        required:true,
        default:false
    },
    paidAt: {
        type:Number,
    },
    isDelivred:{

        type:Number,
        require:true,
        default:false,
    },
    deliverAt:{
        type:Date,
    },

},{
    timestamps:true,
})


const Order = mongoose.model("Order",orderSchema)



export  default Order;