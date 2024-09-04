import {
    GET_STORE_DETAIL_REQUEST,
    GET_STORE_DETAIL_SUCCESS,
    GET_STORE_DETAIL_FAIL ,
    DASHBOARD_DETAIL_REQUEST,
    DASHBOARD_DETAIL_SUCCESS,
    DASHBOARD_DETAIL_FAIL,
    CLEAR_ERRORS
   }  from "../constants/storeConstant"


export const getStoreReducer = (state = {Store:{}} ,action)=>{
 
    switch (action.type) {
      case GET_STORE_DETAIL_REQUEST:
      case DASHBOARD_DETAIL_REQUEST:
          return {
              loading:true,
              store:[]
          }
    
      case DASHBOARD_DETAIL_SUCCESS:
        return{
            loading:false,
            store:action.payload
        }
      case GET_STORE_DETAIL_SUCCESS:
        return {
            loading:false,
            store:action.payload.storeDetail
        }
    
      case GET_STORE_DETAIL_FAIL:
      case DASHBOARD_DETAIL_FAIL:
          return {
              ...state,
              loading:false,
              error:action.error,
          };
        case CLEAR_ERRORS :
          return {
              ...state,
              error:null,
          };      
      default:
       return state
    }
};