import {apiSlice}  from './apiSlice'

import {ORDERS_URL} from '../constants'

import React from 'react'

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        createOrder : builder.mutation({

            query:(order) =>({

                url :ORDERS_URL,
                method: 'POST',
                body:{...order}

            }),

            

        })
    })
});



export const  {useCreateOrderMutation}  = ordersApiSlice;


