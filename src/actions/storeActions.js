import axios from "axios";
import {
    GET_STORE_DETAIL_REQUEST,
    GET_STORE_DETAIL_SUCCESS,
    GET_STORE_DETAIL_FAIL ,
    DASHBOARD_DETAIL_REQUEST,
    DASHBOARD_DETAIL_SUCCESS,
    DASHBOARD_DETAIL_FAIL,
} from '../constants/storeConstant'

export const getStore = ()=> async(dispatch)=>{
    try {
      dispatch({
         type:GET_STORE_DETAIL_REQUEST
      })
     let link = `/api/v1/copany/details/`
      const {data} = await axios.get(link);

     dispatch({
         type:GET_STORE_DETAIL_SUCCESS,
         payload:data,
     })
    } catch (error) {
       dispatch({
           type:GET_STORE_DETAIL_FAIL,
           payload:error.response.data.message
       });
    }
 }

export const getDashboardInfo = ()=> async(dispatch)=>{
    try {
      dispatch({
         type:DASHBOARD_DETAIL_REQUEST
      })
     let link = `/api/v1/dashboard/info`
      const {data} = await axios.get(link);

     dispatch({
         type:DASHBOARD_DETAIL_SUCCESS,
         payload:data,
     })
    } catch (error) {
       dispatch({
           type:DASHBOARD_DETAIL_FAIL,
           payload:error.response.data.message
       });
    }
 }