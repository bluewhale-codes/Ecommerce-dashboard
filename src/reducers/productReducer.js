import { ALL_PRODUCT_REQUEST,
         ALL_PRODUCT_FAIL, 
         ALL_PRODUCT_SUCCESS,
         ADMIN_PRODUCT_REQUEST,
         ADMIN_PRODUCT_SUCCESS,
         ADMIN_PRODUCT_FAIL,
         DELETE_PRODUCT_REQUEST,
         DELETE_PRODUCT_SUCCESS,
         DELETE_PRODUCT_FAIL,
         DELETE_PRODUCT_RESET,
         PRODUCT_DETAILS_REQUEST,
         PRODUCT_DETAILS_SUCCESS,
         PRODUCT_DETAILS_FAIL,
         NEW_PRODUCT_REQUEST,
         NEW_PRODUCT_SUCCESS,
         NEW_PRODUCT_FAIL,
         NEW_PRODUCT_RESET,
         ALL_BRANDS_REQUEST,
        ALL_BRANDS_SUCCESS,
        ALL_BRANDS_FAIL,
        UPDATE_PRODUCT_REQUEST,
        UPDATE_PRODUCT_SUCCESS,
        UPDATE_PRODUCT_FAIL,
        UPDATE_PRODUCT_RESET,
        NEW_BRAND_REQUEST,
        NEW_BRAND_SUCCESS,
        NEW_BRAND_FAIL,
        NEW_BRAND_RESET,
        SAVE_VARIANT_INFO,
        ADD_OPTIONS,
        REMOVE_OPTION,
        ADD_VARIANT,
        CLEAR_ERRORS,
        GET_DISCOUNT_REQUEST,
        GET_DISCOUNT_SUCCESS,
        GET_DISCOUNT_FAIL,
        CREATE_DISCOUNT_REQUEST,
        CREATE_DISCOUNT_SUCCESS,
        CREATE_DISCOUNT_FAIL,
        LOCAL_RESET, 
        GET_BRANDS_REQUEST,
        GET_BRANDS_SUCCESS,
        GET_BRANDS_FAIL,
        GET_BRAND_DETAIL_REQUEST,
      GET_BRAND_DETAIL_SUCCESS,
       GET_BRAND_DETAIL_FAIL,
       GET_BRAND_PRODUCT_REQUEST,
       GET_BRAND_PRODUCT_SUCCESS,
       GET_BRAND_PRODUCT_FAIL,
        CREATE_DISCOUNT_RESET} 
         from '../constants/productConstants'




export const productsReducer = (state = {product:[]} ,action)=>{
 
    switch (action.type) {
      case ALL_PRODUCT_REQUEST:
          
          return {
              loading:true,
              product:[]
          }
      case ALL_PRODUCT_SUCCESS:
          
          return {
              loading:false,
              products:action.payload.products
          }
      
      case ALL_PRODUCT_FAIL :
          
          return {
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

export const adminProductReducer = (state = {product:[],BrandProducts:[]} ,action)=>{
 
    switch (action.type) {
      case ADMIN_PRODUCT_REQUEST :
          
          return {
              loading:true,
              product:[]
          }
      case GET_BRAND_PRODUCT_REQUEST :
          return {
              loading:true,
              brandProducts:[]
          }
      case ADMIN_PRODUCT_SUCCESS :
          
          return {
              loading:false,
              products:action.payload.products,
              count:action.payload.productCount
             
          }
        case GET_BRAND_PRODUCT_SUCCESS:
            return {
                loading:false,
                brandProducts:action.payload.product,
                
        }
      
      case GET_BRAND_DETAIL_FAIL:
      case ADMIN_PRODUCT_FAIL :
          
          return {
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

// Update and  Delete Product
export const productReducer  = (state = {} ,action)=>{
 
    switch (action.type) {
      case DELETE_PRODUCT_REQUEST :
      case UPDATE_PRODUCT_REQUEST:
          return {
              ...state,
              loading:true,
          }
      case DELETE_PRODUCT_SUCCESS :
          return {
              ...state,
              loading:false,
              isDeleted:action.payload,
          }
      case UPDATE_PRODUCT_SUCCESS:
          return {
              ...state,
              loading:false,
              isUpdated:action.payload,
          }
      case DELETE_PRODUCT_FAIL:
      case UPDATE_PRODUCT_FAIL:
          return {
              ...state,
              loading:false,
              error:action.payload,
          };
      case DELETE_PRODUCT_RESET:
          return {
              ...state,
              isDeleted:false,
          } ;
      case UPDATE_PRODUCT_RESET:
          return {
              ...state,
              isUpdated:false,
          } ;
    
      case CLEAR_ERRORS :
          
          return {
              ...state,
              error:null,
          };
    
      default:
       return state
    }
};


// Get Product details:--

export const productDetailsReducer  = (state = {Product:{}} ,action)=>{
 
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST :
          
          return {
              loading:true,
              ...state
          }
      case PRODUCT_DETAILS_SUCCESS :
          
          return {
              loading:false,
              product:action.payload,
          }
      case PRODUCT_DETAILS_FAIL :
          
          return {
              loading:false,
              error:action.payload,
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
// create product -- ADMIN
export const newProductReducer  = (state = {product:{}} ,action)=>{
 
    switch (action.type) {
      case NEW_PRODUCT_REQUEST :   
          return {
              ...state,
              loading:true,
          }
      case NEW_PRODUCT_SUCCESS:
          
          return {
              loading:false,
              success:action.payload.success,
              product:action.payload.product
        }
      case NEW_PRODUCT_FAIL :
          
          return {
              ...state,
              loading:false,
              error:action.payload,
          };
      case NEW_PRODUCT_RESET:
          return {
              ...state,
              success:false,
          } ;
    
      case CLEAR_ERRORS :
          
          return {
              ...state,
              error:null,
          };
    
      default:
       return state
    }
};


// GET ALL BRANDS OR SELLERS
export const allBrandsReducer = (state = {Brands:[]} ,action)=>{
 
    switch (action.type) {
      case ALL_BRANDS_REQUEST :
          
          return {
              loading:true,
              Brands:[]
          }
      case ALL_BRANDS_SUCCESS:
          
          return {
              loading:false,
              Brands:action.payload.brands,
          }
      case ALL_BRANDS_FAIL:
          
          return {
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

// NEW BRAND REDUCER

export const newBrandReducer  = (state = {brand:{}} ,action)=>{
 
      switch (action.type) {
        case NEW_BRAND_REQUEST :   
            return {
                ...state,
                loading:true,
            }
        case NEW_BRAND_SUCCESS:
            
            return {
                loading:false,
                success:action.payload.success,
                brand:action.payload.brand
            }
        case NEW_BRAND_FAIL :
            
            return {
                ...state,
                loading:false,
                error:action.payload,
            };
        case NEW_BRAND_RESET:
            return {
                ...state,
                success:false,
            } ;
      
        case CLEAR_ERRORS :
            
            return {
                ...state,
                error:null,
            };
      
        default:
         return state
      }
};

export const variantReducer =(state ={variantInfo:[],options:[],variants:[]},action) =>{
    switch (action.type) {
        case SAVE_VARIANT_INFO:  
            const Item = action.payload
                return {
                    ...state,
                    variantInfo:[...state.variantInfo,Item] 
                }
        case ADD_OPTIONS:
             const option = action.payload
                return {
                    ...state,
                    options:[...state.options,option]
                }
        case ADD_VARIANT:
             const variant = action.payload
                return {
                    ...state,
                    variants:[...state.options,variant]
                }
        case LOCAL_RESET:
             return {
                ...state,
             }
        case REMOVE_OPTION:
            return{
                ...state,
                options:state.options.filter((i)=>i.id !== action.payload),
            }
        default:
          return  state
    }
}

export const discountReducer = (state = {dproduct:[]} ,action)=>{
 
    switch (action.type) {
      case GET_DISCOUNT_REQUEST:
          return {
              loading:true,
              product:[]
          }
       
      case GET_DISCOUNT_SUCCESS:
        return {
            loading:false,
            dproduct:action.payload.dproducts
        }
    
      case GET_DISCOUNT_FAIL:
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
export const newDiscountReducer = (state = {discount:{}} ,action)=>{
 
    switch (action.type) {
      case CREATE_DISCOUNT_REQUEST:
         return {
            ...state,
            loading:true,
        }
       
      case CREATE_DISCOUNT_SUCCESS:
        return{
            success:action.payload.success,
            discount:action.payload.discontproduct
        }
    case CREATE_DISCOUNT_FAIL:
            return {
                ...state,
                success:false,
                error:action.payload,
            } ;
            case CLEAR_ERRORS :
          
            return {
                ...state,
                error:null,
                loading:false
            };
      default:
       return state
    }
};
export const getBrandsReducer = (state = {Brands:[],Brand:{},Product:[]} ,action)=>{
 
    switch (action.type) {
      case GET_BRANDS_REQUEST :
      case GET_BRAND_DETAIL_REQUEST:
          return {
              ...state,
              loading:true,
          }
     
      case GET_BRANDS_SUCCESS :
          
          return {
              loading:false,
              brands:action.payload.brands,
              count:action.payload.brandsCount
             
          }
     
      case GET_BRAND_DETAIL_SUCCESS:
           return {
            loading:false,
            brand:action.payload.brand
           }
      case GET_BRAND_DETAIL_FAIL:
      case GET_BRANDS_FAIL :
          return {
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


