import axios  from "axios";
import { ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
    GET_SHIPPING_INFO_REQUEST,
    GET_SHIPPING_INFO_SUCCESS,
    GET_SHIPPING_INFO_FAIL,
    USER_ORDERS_REQUEST,
    USER_ORDERS_SUCCESS,
    USER_ORDERS_FAIL,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAIL,
    UDPATE_ORDER_REQUEST,
   UDPATE_ORDER_SUCCESS,
   UDPATE_ORDER_FAIL,
   CREATE_INVOICE_REQUEST,
  CREATE_INVOICE_SUCCESS,
  CREATE_INVOICE_FAIL,
  GET_INVOICE_REQUEST,
  GET_INVOICE_SUCCESS,
  GET_INVOICE_FAIL,
  GET_ALL_INVOICE_REQUEST,
   GET_ALL_INVOICE_SUCCESS,
   GET_ALL_INVOICE_FAIL,
   TODAY_ORDERS_REQUEST,
   TODAY_ORDERS_SUCCESS,
    TODAY_ORDERS_FAIL,
    UDPATE_ORDER_RESET,
 } from "../constants/ordersConstants";
import { USER_DETAILS_FAIL } from "../constants/userConstants";

// ALL ORDERS -- ADMIN
export const allOrdersAdmin = ()=> async(dispatch)=>{
    try {
      dispatch({
         type:ALL_ORDERS_REQUEST
    })

    let link  = "/api/v1/admin/orders/";
    const {data} = await axios.get(link);
 
     dispatch({
         type:ALL_ORDERS_SUCCESS,
         payload:data.orders,
     })
    } catch (error) {
       dispatch({
           type:ALL_ORDERS_FAIL,
           payload:error.response.data.message
       });
    }
 }
export const todayOrders = ()=> async(dispatch)=>{
    try {
      dispatch({
         type:TODAY_ORDERS_REQUEST
    })

    let link  = "/api/v1/admin/orders/today/";
    const {data} = await axios.get(link);
 
     dispatch({
         type:TODAY_ORDERS_SUCCESS,
         payload:data.orders,
     })
    } catch (error) {
       dispatch({
           type:TODAY_ORDERS_FAIL,
           payload:error.response.data.message
       });
    }
 }

// GET SINGLE ORDER -- ADMIN
export const singleOrderAdmin = (id)=> async(dispatch)=>{
    try {
      dispatch({
         type:GET_ORDER_REQUEST
    })

    let link  = `/api/v1/single/order/${id}`;
    const {data} = await axios.get(link);
 
     dispatch({
         type:GET_ORDER_SUCCESS,
         payload:data.order,
     })
    } catch (error) {
       dispatch({
           type:GET_ORDER_FAIL,
           payload:error.response.data.message
       });
    }
 }
// SINGLE USER ORDERS -- ADMIN
export const userOrderAdmin = (id)=> async(dispatch)=>{
    try {
      dispatch({
         type:USER_ORDERS_REQUEST
    })

    let link  = `/api/v1/user/order/${id}`;
    const {data} = await axios.get(link);
 
     dispatch({
         type:USER_ORDERS_SUCCESS,
         payload:data.orders,
     })
    } catch (error) {
       dispatch({
           type:USER_ORDERS_FAIL,
           payload:error.response.data.message
       });
    }
 }

 // get Shipping info --ADMIN
export const getShippingInfo = (id)=> async(dispatch)=>{
    try {
      dispatch({
         type:GET_SHIPPING_INFO_REQUEST
      })
     let link  = `/api/v1/shippingInfo/detail/${id}`
    const {data} = await axios.get(link);
 
     dispatch({
         type:GET_SHIPPING_INFO_SUCCESS,
         payload:data.shippInfo,
     })
    } catch (error) {
       dispatch({
           type:GET_SHIPPING_INFO_FAIL,
           payload:error.response.data.message
       });
    }
 }


 export const updateOrderAdmin = (id,order)=> async (dispatch)=>{
    try {
      dispatch({
         type:UDPATE_ORDER_REQUEST
      })
      const config = {headers:{"Content-Type":"application/json"}}
 
      const {data} = await axios.put(`/api/v1/admin/update/order/${id}`,order,config);
 
     dispatch({
         type:UDPATE_ORDER_SUCCESS,
         payload:data.success,
     })
    } catch (error) {
       dispatch({
           type:UDPATE_ORDER_FAIL,
           payload:error.response.data.message
       });
    }
 }

 export const createInvoice = (invoice)=> async(dispatch,getState)=>{
    try {
      dispatch({
         type:CREATE_INVOICE_REQUEST
      })


     const config = {headers:{"Content-Type":"application/json"}}
     let link  = `/api/v1/invoice/create`
      const {data} = await axios.post(link,invoice,config);
 
     dispatch({
         type:CREATE_INVOICE_SUCCESS,
         payload:data,
     })
    } catch (error) {
       dispatch({
           type:CREATE_INVOICE_FAIL,
           payload:error.response.data.message
       });
    }
 }


export const getInvoice = (id)=> async(dispatch)=>{
   try {
     dispatch({
        type:GET_INVOICE_REQUEST
   })

   let link  = `/api/v1/invoice/${id}`;
   const {data} = await axios.get(link);

    dispatch({
        type:GET_INVOICE_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:GET_INVOICE_FAIL,
          payload:error.response.data.message
      });
   }
}
export const getAllInvoice = ()=> async(dispatch)=>{
   try {
     dispatch({
        type:GET_ALL_INVOICE_REQUEST
   })

   let link  = `/api/v1/all/invoice/`;
   const {data} = await axios.get(link);

    dispatch({
        type:GET_ALL_INVOICE_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:GET_ALL_INVOICE_FAIL,
          payload:error.response.data.message
      });
   }
}
