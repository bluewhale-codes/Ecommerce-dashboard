import { createStore,combineReducers,applyMiddleware} from "redux";
import thunk  from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { adminProductReducer, allBrandsReducer, newBrandReducer,newDiscountReducer,discountReducer, newProductReducer, productDetailsReducer, productReducer, productsReducer, variantReducer , getBrandsReducer} from "./reducers/productReducer";
import { allOrdersReducer, getShippingInfoReducer , singleOrderReducer , UpdateOrderReducer , createInvoiceReducer } from "./reducers/ordersReducers";
import { allUserReducer, userDetailReducer } from "./reducers/userReducers";
import { getStoreReducer } from "./reducers/storeReducers";

const reducer = combineReducers({
   products:productsReducer,
   dproducts:discountReducer,
   adminProducts:adminProductReducer,
   product:productReducer,
   productDetails:productDetailsReducer,
   adminAllOrders:allOrdersReducer,
   newProduct:newProductReducer,
   brands:allBrandsReducer,
   allUser:allUserReducer,
   newBrand:newBrandReducer,
   variant:variantReducer,
   userDetail:userDetailReducer,
   shippingInfo:getShippingInfoReducer,
   newDiscount:newDiscountReducer,
   orderDetail:singleOrderReducer,
   updateOrderStatus:UpdateOrderReducer,
   productBrands:getBrandsReducer,
   newInvoice:createInvoiceReducer,
   storeInfo:getStoreReducer
})
let initialState ={
   variant:{
        variantInfo:localStorage.getItem("productVariant") ?  JSON.parse(localStorage.getItem("productVariant")):[],
        options:localStorage.getItem("productOptions") ?  JSON.parse(localStorage.getItem("productOptions")):[],
        variants:localStorage.getItem("productVariants") ?  JSON.parse(localStorage.getItem("productVariants")):[],
   }
   
};

const middleware = [thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;