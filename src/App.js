import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Dashboard from './components/dashboard/pages/Dashboard';
import ProductList from "./components/dashboard/pages/ProductList";
import ProductGallery from "./components/dashboard/pages/ProductGallary";
import ProductDetails from "./components/dashboard/pages/ProductDetails";
import UpdateProduct from "./components/dashboard/pages/UpdateProduct";
import OrdersList from "./components/dashboard/pages/OrdersList";
import AdminOrderDetails from "./components/dashboard/pages/OrderDetails";
import SellerCollection from "./components/dashboard/pages/SellerCollection";
import SellerDetail from "./components/dashboard/pages/SellerDetail";
// import NewProduct from "./components/dashboard/pages/NewProduct";
import NewProducts from "./components/dashboard/pages/NewProducts";
// import UpdateProduct from "./components/dashboard/pages/UpdateProduct";
import AllAdminUsers from './components/dashboard/pages/AllAdminUsers'
import Navbar from "./components/dashboard/pages/main/Navbar";
import Invoice from "./components/dashboard/pages/Invoice";
import InvoiceDetail from "./components/dashboard/pages/InvoiceDetail";
import CreateInvoice from "./components/dashboard/pages/CreateInvoice";
import CustomerDetail from "./components/dashboard/pages/CustomerDetail";
import UserOrders from "./components/dashboard/pages/UserOrders";
import CustomerActivityDetail from "./components/dashboard/pages/CustomerActivityDetail";
import CustomerInvoiceList from "./components/dashboard/pages/CustomerInvoiceList";
import AllReviewList from "./components/dashboard/pages/AllReviewList";
import ProductReviews from "./components/dashboard/pages/ProductReviews";
import NewSeller from "./components/dashboard/pages/NewSeller";
import AdminProfile from "./components/dashboard/pages/AdminProfile";
import EditAdminProfile from "./components/dashboard/pages/EditAdminProfile";
import Home from "./components/dashboard/pages/SiteManagement/Home";
import ShippingDelivery from "./components/dashboard/pages/SiteManagement/ShippingDelivery";
import CreateDiscount from "./components/dashboard/pages/SiteManagement/CreateDiscount";
import UsersAndPermissions from "./components/dashboard/pages/SiteManagement/UsersAndPermissions";
import Billing from "./components/dashboard/pages/SiteManagement/Billing";
import DiscountCoupon from "./components/dashboard/pages/SiteManagement/DiscountCoupon";
import SetShippinRates from "./components/dashboard/pages/SiteManagement/SetShippinRates";
import CreateStaff from "./components/dashboard/pages/SiteManagement/CreateStaff";
import NewCustomer from "./components/dashboard/pages/NewCustomer";
import MakeDiscount from "./components/dashboard/pages/MakeDiscount";
import MainAlert from "./components/dashboard/pages/main/MainAlert";
import UsersOrderDetail from "./components/dashboard/pages/UsersOrderDetail";
import { useState } from "react";
function App() { 
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },5000)
  }
  
  return (
    <>
       <Router>
           <Navbar/>
           <MainAlert alert={alert}/>
           <Routes>
               <Route exact path='/admin/dashboard' element={<Dashboard/>}/>
               <Route exact path='/admin/products' element={<ProductList/>}/>
               <Route exact path='/admin/products/discount' element={<MakeDiscount showAlert={showAlert}/>}/>
               <Route exact path='/admin/product/gallary' element={<ProductGallery/>}/>
               <Route exact path='/admin/product/:id' element={<ProductDetails/>}/>
               {/* <Route exact path='/update/product/:id' element={<UpdateProduct/>}/> */}
               <Route exact path='/admin/orders' element={<OrdersList/>}/>
               <Route exact path='/admin/orders/details/:id' element={<AdminOrderDetails showAlert={showAlert}/>}/>
               <Route exact path='/order/detail/:id' element={<UsersOrderDetail />}/>
               <Route exact path='/admin/sellers' element={<SellerCollection/>}/>
               <Route exact path='/admin/sellers/detail/:id' element={<SellerDetail/>}/>
               <Route exact path='/admin/new/product' element={<NewProducts/>}/>
               <Route exact path='/admin/product/Update/:id' element={<UpdateProduct/>}/>
               <Route exact path='/admin/customers' element={<AllAdminUsers/>}/>
               <Route exact path='/admin/new/customer' element={<NewCustomer/>}/>
               <Route exact path='/admin/invoice' element={<Invoice/>}/>
               <Route exact path='/admin/invoice/detail' element={<InvoiceDetail/>}/>
               <Route exact path='/admin/invoice/create/:id' element={<CreateInvoice/>}/>
               <Route exact path='/admin/customer/:id' element={<CustomerDetail/>}/>
               <Route exact path='/order/customer/:id' element={<UserOrders/>}/>
               <Route exact path='/admin/customer/activity' element={<CustomerActivityDetail/>}/>
               <Route exact path='/admin/customer/invoice' element={<CustomerInvoiceList/>}/>
               <Route exact path='/admin/customer/reviews' element={<AllReviewList/>}/>
               <Route exact path='/admin/product/reviews/:id' element={<ProductReviews/>}/>
               <Route exact path='admin/new/seller' element={<NewSeller/>}/>
               <Route exact path='admin/profile' element={<AdminProfile/>}/>
               <Route exact path='admin/edit/profile' element={<EditAdminProfile/>}/>
               <Route exact path='admin/site/management' element={<Home/>}/>
               <Route exact path='admin/site/shipping&Delivery' element={<ShippingDelivery/>}/>
               <Route exact path='admin/create/discount' element={<CreateDiscount/>}/>
               <Route exact path='admin/store/permissions' element={<UsersAndPermissions/>}/>
               <Route exact path='/admin/store/billing' element={<Billing/>}/> 
               <Route exact path='/admin/site/discount' element={<DiscountCoupon/>}/> 
               <Route exact path='/admin/shipping/rate' element={<SetShippinRates/>}/> 
               <Route exact path='/admin/create/staf' element={<CreateStaff/>}/> 
           </Routes>
       </Router>
    </>
  );
}

export default App;
