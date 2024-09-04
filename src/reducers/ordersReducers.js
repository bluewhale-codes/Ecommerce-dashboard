import { ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
    CLEAR_ERRORS,
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


    // ALL  ORDERS ---Admin orders
export const allOrdersReducer =  (state={orders:[]},action) =>{
    switch (action.type) {
        case USER_ORDERS_REQUEST:
        case ALL_ORDERS_REQUEST :
        case TODAY_ORDERS_REQUEST:
                return {
                   loading:true,
                }
        case USER_ORDERS_SUCCESS:
        case ALL_ORDERS_SUCCESS :
        case TODAY_ORDERS_SUCCESS:
          
                return {
                    loading:false,
                    orders:action.payload,
                }
        case USER_ORDERS_FAIL:
        case ALL_ORDERS_FAIL :
        case TODAY_ORDERS_FAIL:
          
                return {
                    loading:false,
                    error:action.payload,
                }
        case CLEAR_ERRORS:
                return {
                    ...state,
                    error:null
                }
                
        default:
            return state;
    }
}
    // get single order ---Admin orders
export const singleOrderReducer =  (state={Order:{}},action) =>{
    switch (action.type) {
        case GET_ORDER_REQUEST:
                return {
                   loading:true,
                }
        case GET_ORDER_SUCCESS:
                return {
                    loading:false,
                    order:action.payload,
                }
        case GET_ORDER_FAIL:
                return {
                    loading:false,
                    error:action.payload,
                }
        case CLEAR_ERRORS:
                return {
                    ...state,
                    error:null
                }
                
        default:
            return state;
    }
}

// get Shipping info
export const getShippingInfoReducer =  (state={Address:{}},action) =>{
    switch (action.type) {
        
        case GET_SHIPPING_INFO_REQUEST :   
                return {
                   ...state,
                   loading:true,
                }
        case GET_SHIPPING_INFO_SUCCESS:
          
                return {
                    loading:false,
                    AddressInfo:action.payload
                }
        case GET_SHIPPING_INFO_FAIL :
          
                return {
                    loading:false,
                    error:action.payload,
                }
        
        
        case CLEAR_ERRORS:
                return {
                    ...state,
                    error:null,
                }
    
        default:
            return state;
    }
}



export const UpdateOrderReducer =  (state={},action) =>{
    switch (action.type) {
        case UDPATE_ORDER_REQUEST :
                return {
                   ...state,
                   loading:true,
                }
        case UDPATE_ORDER_SUCCESS :
                return {
                    ...state,
                    loading:false,
                    isUpdated:action.payload,
                }
        case UDPATE_ORDER_FAIL:
                return {
                    ...state,
                    loading:false,
                    error:action.payload,
                }
        case UDPATE_ORDER_RESET :
                return {
                    ...state,
                    isUpdated:false,
                }
        case CLEAR_ERRORS:
                return {
                    ...state,
                    error:null
                }
                
        default:
            return state;
    }
}

// CREATE ORDER REDUCER
export const createInvoiceReducer =  (state={invoice:[],Invoic:{}},action) =>{
    switch (action.type) {
        case GET_INVOICE_REQUEST:
        case CREATE_INVOICE_REQUEST :
        case GET_ALL_INVOICE_REQUEST:
                return {
                   ...state,
                   loading:true,
                }
        case GET_INVOICE_SUCCESS:
            return{
                loading:false,
                invoic:action.payload.invoice
            }
        case GET_ALL_INVOICE_SUCCESS:
            return {
                loading:false,
                invoices:action.payload.invoice,
            }
        case CREATE_INVOICE_SUCCESS :
                return {
                    loading:false,
                    success:action.payload.success,
                    invoice:action.payload.invoice,
                }
        case CREATE_INVOICE_FAIL:
        case GET_INVOICE_FAIL:
        case GET_ALL_INVOICE_FAIL:
                return {
                    loading:true,
                    error:action.payload,
                }
        case CLEAR_ERRORS:
                return {
                    ...state,
                    error:null
                }
        default:
            return state;
    }
}
