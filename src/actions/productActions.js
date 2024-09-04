import axios  from "axios";
import {ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS ,
    ALL_PRODUCT_FAIL,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL ,
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
   GET_DISCOUNT_REQUEST,
   GET_DISCOUNT_SUCCESS,
   GET_DISCOUNT_FAIL,
   CREATE_DISCOUNT_REQUEST,
   CREATE_DISCOUNT_SUCCESS,
   CREATE_DISCOUNT_FAIL,
   GET_BRANDS_REQUEST,
   GET_BRANDS_SUCCESS,
   GET_BRANDS_FAIL,
   GET_BRAND_DETAIL_REQUEST,
   GET_BRAND_DETAIL_SUCCESS,
   GET_BRAND_PRODUCT_REQUEST,
   GET_BRAND_PRODUCT_SUCCESS,
   GET_BRAND_PRODUCT_FAIL,
   GET_BRAND_DETAIL_FAIL,
    CLEAR_ERRORS} from "../constants/productConstants";


export const getProduct = (catagory="", keyword="",currentPage="1")=> async(dispatch)=>{
    try {
      dispatch({
         type:ALL_PRODUCT_REQUEST
      })
     let link = `/api/v1/products?catagory=${catagory}&keyword=${keyword}&page=${currentPage}`
      const {data} = await axios.get(link);

     dispatch({
         type:ALL_PRODUCT_SUCCESS,
         payload:data,
     })
    } catch (error) {
       dispatch({
           type:ALL_PRODUCT_FAIL,
           payload:error.response.data.message
       });
    }
 }


 export const getAdminProduct = ()=> async(dispatch)=>{
    try {
      dispatch({
         type:ADMIN_PRODUCT_REQUEST
      })
     let link  = "/api/v1/products/admin"
      const {data} = await axios.get(link);
 
     dispatch({
         type:ADMIN_PRODUCT_SUCCESS,
         payload:data,
     })
    } catch (error) {
       dispatch({
           type:ADMIN_PRODUCT_FAIL,
           payload:error.response.data.message
       });
    }
 }


 // Delete Product
 export const deleteProduct = (id)=> async (dispatch)=>{
   try {
     dispatch({
        type:DELETE_PRODUCT_REQUEST
     })

     const {data} = await axios.delete(`/api/v1/products/delete/${id}`);

    dispatch({
        type:DELETE_PRODUCT_SUCCESS,
        payload:data.success,
    })
   } catch (error) {
      dispatch({
          type:DELETE_PRODUCT_FAIL,
          payload:error.response.data.message
      });
   }
}

// product detail
export const getProductDetails = (id)=> async (dispatch)=>{
   try {
     dispatch({
        type:PRODUCT_DETAILS_REQUEST
     })

     const {data} = await axios.get(`/api/v1/products/details/${id}`);

    dispatch({
        type:PRODUCT_DETAILS_SUCCESS,
        payload:data.product,
    })
   } catch (error) {
      dispatch({
          type:PRODUCT_DETAILS_FAIL,
          payload:error.response.data.message
      });
   }
}


// Create a product --ADMIN
export const newProduct = (productData)=> async (dispatch)=>{
   
   try {
     dispatch({
        type:NEW_PRODUCT_REQUEST
     })
     const config = {headers:{"Content-Type":"application/json"}}
     
     const {data} = await axios.post("/api/v1/products/new",productData,config);

    dispatch({
        type:NEW_PRODUCT_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:NEW_PRODUCT_FAIL,
          payload:error.response.data.message
      });
   }
}

// get All brands
export const getAllBrand = ()=> async(dispatch)=>{
   try {
     dispatch({
        type:ALL_BRANDS_REQUEST
     })
  
    let link = "/api/v1/Brand/all"
     const {data} = await axios.get(link);

    dispatch({
        type:ALL_BRANDS_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:ALL_BRANDS_FAIL,
          payload:error.response.data.message
      });
   }
}

// update a product::
export const updateProduct = (id,productData)=> async (dispatch)=>{
   try {
     dispatch({
        type:UPDATE_PRODUCT_REQUEST
     })
     const config = {headers:{"Content-Type":"application/json"}}

     const {data} = await axios.put(`/api/v1/products/${id}`,productData,config);

    dispatch({
        type:UPDATE_PRODUCT_SUCCESS,
        payload:data.success,
    })
   } catch (error) {
      dispatch({
          type:UPDATE_PRODUCT_FAIL,
          payload:error.response.data.message
      });
   }
}

// CREATE BRAND
export const createNewBrand = (brandData)=> async (dispatch)=>{
   try {
     dispatch({
        type:NEW_BRAND_REQUEST
     })
     const config = {headers:{"Content-Type":"application/json"}}

     const {data} = await axios.post("/api/v1/Brand/create",brandData,config);

    dispatch({
        type:NEW_BRAND_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:NEW_BRAND_FAIL,
          payload:error.response.data.message
      });
   }
}
export const saveVariantInfo = (data) => async(dispatch,getState) =>{
   dispatch({
      type:SAVE_VARIANT_INFO,
      payload:data,
   })
   localStorage.setItem("productVariant",JSON.stringify(getState().variant.variantInfo));
}
export const addOptions = (data) => async(dispatch,getState) =>{
   dispatch({
      type:ADD_OPTIONS,
      payload:data,
   })
   localStorage.setItem("productOptions",JSON.stringify(getState().variant.options));
}
export const addVariant = (data) => async(dispatch,getState) =>{
   dispatch({
      type:ADD_VARIANT,
      payload:data,
   })
   localStorage.setItem("productVariants",JSON.stringify(getState().variant.options));
}
export const removeOptions = (id) => async(dispatch,getState) =>{
   dispatch({
      type:REMOVE_OPTION,
      payload:id,
   })
   localStorage.setItem("productOptions",JSON.stringify(getState().variant.options));
}

export const getDiscountProduct = ()=> async(dispatch)=>{
   try {
     dispatch({
        type:GET_DISCOUNT_REQUEST
     })
   //  let link  = `/api/v1/products?keyword=${keyword}&page=${currentPage}`
    let link = `/api/v1/discountproduct`
     const {data} = await axios.get(link);

    dispatch({
        type:GET_DISCOUNT_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:GET_DISCOUNT_FAIL,
          payload:error.response.data.message
      });
   }
}


// CREATE DISCOUNT
export const createDiscount = (discountData)=> async (dispatch)=>{
   try {
     dispatch({
        type:CREATE_DISCOUNT_REQUEST
     })
     const config = {headers:{"Content-Type":"application/json"}}
     
     const {data} = await axios.post("/api/v1/add/discountProduct",discountData,config);
     
     dispatch({
        type:CREATE_DISCOUNT_SUCCESS,
        payload:data,
      })
   } catch (error) {
      dispatch({
         type:CREATE_DISCOUNT_FAIL,
         payload:error.response.data.message
      });
   }
}

export const getBrands = ()=> async(dispatch)=>{
   try {
     dispatch({
        type:GET_BRANDS_REQUEST
     })
    let link  = "/api/v1/Brand/all"
     const {data} = await axios.get(link);

    dispatch({
        type:GET_BRANDS_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:GET_BRANDS_FAIL,
          payload:error.response.data.message
      });
   }
}

export const getBrandDetails = (id)=> async (dispatch)=>{
   try {
     dispatch({
        type:GET_BRAND_DETAIL_REQUEST
     })

     const {data} = await axios.get(`/api/v1/Brand/detail/${id}`);

    dispatch({
        type:GET_BRAND_DETAIL_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:GET_BRAND_DETAIL_FAIL,
          payload:error.response.data.message
      });
   }
}

export const getBrandProduct = (id)=> async(dispatch)=>{
   try {
     dispatch({
        type:GET_BRAND_PRODUCT_REQUEST
     })
    let link  = `/api/v1/Brand/product/${id}`
     const {data} = await axios.get(link);

    dispatch({
        type:GET_BRAND_PRODUCT_SUCCESS,
        payload:data,
    })
   } catch (error) {
      dispatch({
          type:GET_BRAND_PRODUCT_FAIL,
          payload:error.response.data.message
      });
   }
}


// CLEAR ERRORS
export const clearErrors = ()=> async(dispatch)=>{ 
   dispatch({type:CLEAR_ERRORS})
}
