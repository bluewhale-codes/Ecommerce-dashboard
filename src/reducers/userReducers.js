import { ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    CLEAR_ERRORS,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL
   } from "../constants/userConstants";




// ALL USER --ADMIN
export const allUserReducer =(state ={users:[]},action) =>{
    switch (action.type) {
        case ALL_USERS_REQUEST:
        
            return{
                ...state,
                loading:true,
            }
        
       case ALL_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.payload 
            }
        case ALL_USERS_FAIL:
            return{
                ...state,
                loading:false, 
                error:action.payload
            }

        case CLEAR_ERRORS :
          
          return {
              ...state,
              error:null
          };
    
        default:
          return state
    }   
};

// USER DETAILS ---ADMIN
export const userDetailReducer =(state ={user:{}},action) =>{
    switch (action.type) {
        case USER_DETAILS_REQUEST:
        
            return{
                ...state,
                loading:true,
            }
        
       case USER_DETAILS_SUCCESS:
            return{
                ...state,
                loading:false,
                user:action.payload 
            }
        case USER_DETAILS_FAIL:
            return{
                ...state,
                loading:false, 
                error:action.payload
            }
        case CLEAR_ERRORS :
          
          return {
              ...state,
              error:null
          };
        default:
          return state
    }   
};