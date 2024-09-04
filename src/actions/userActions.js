import axios from "axios";
import { ALL_USERS_REQUEST , ALL_USERS_SUCCESS ,ALL_USERS_FAIL,USER_DETAILS_REQUEST,
   USER_DETAILS_SUCCESS,
   USER_DETAILS_FAIL } from "../constants/userConstants";


// ALL USERS -- ADMIN
  export const getAllUser = ()=> async(dispatch)=>{
    try {
      dispatch({
         type:ALL_USERS_REQUEST
      })

      let link  = "/api/v1/admin/users"
      const {data} = await axios.get(link);
 
     dispatch({
         type:ALL_USERS_SUCCESS,
         payload:data.users,
     })
    } catch (error) {
       dispatch({
           type:ALL_USERS_FAIL,
           payload:error.response.data.message
       });
    }
}

 // User detail -- ADMIN
 export const getUserDetail = (id)=> async(dispatch)=>{
   try {
     dispatch({
        type:USER_DETAILS_REQUEST
     })

     let link  = `/api/v1/admin/user/${id}`
     const {data} = await axios.get(link);

    dispatch({
        type:USER_DETAILS_SUCCESS,
        payload:data.user,
    })
   } catch (error) {
      dispatch({
          type:USER_DETAILS_FAIL,
          payload:error.response.data.message
      });
}
}

