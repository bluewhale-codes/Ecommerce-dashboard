import React, { useEffect ,useState } from 'react'
import { useSelector ,useDispatch  } from 'react-redux'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SecurityIcon from '@mui/icons-material/Security';
import SearchIcon from '@mui/icons-material/Search';
import OrderStatusStepper from './subcomponent/OrderStatusStepper';
import { Link ,useNavigate,useParams} from 'react-router-dom';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Sidebar from './main/Sidebar';
import { Typography } from '@material-ui/core';
import { Alert } from '@mui/material';
import Loader from './main/Loader';
import { singleOrderAdmin  , updateOrderAdmin , createInvoice} from '../../../actions/ordersActions';
import { getStore } from '../../../actions/storeActions';
import AdminOrderCard from './subcomponent/AdminOrderCard';
import { NavigationRounded } from '@material-ui/icons';
import DescriptionIcon from '@mui/icons-material/Description';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const OrderDetails = ({showAlert}) => {



   const {loading,order} = useSelector((state)=>state.orderDetail)
   const {store} = useSelector((state)=>state.storeInfo)
   const {isUpdated} = useSelector((state)=>state.updateOrderStatus)
   const {loading:load,success,invoice} = useSelector((state)=>state.newInvoice)
   const dispatch = useDispatch();
   const navigate = useNavigate()
   const  [status, setStatus] = useState("");
   

   const {id} = useParams()
   
   
   const processFormHandler = (e) => {
      e.preventDefault();
      const myForm = new FormData();
      myForm.set("status",status);
      dispatch(updateOrderAdmin(id,myForm))
     
   }
   const generateInvoice = (e) =>{
      e.preventDefault();
      if(order && store){
         let invoice = {
            companyinfo:store.companyAddress,
            companyEmail:store.email,
            companyBankDetail:store.companyBankDetail,
            shippingInfo:order.shippingInfo,
            orderItems:order.orderItems,
            paymentInfo:{
               id:"12345",
               status:"success"
            },
            Seller:"Vishal shakya",
            order:order._id,
            totalMRP:order.totalMRP,
            shippingPrice:order.shippingPrice,
            couponDiscount:order.couponDiscount,
            subTotal:order.subTotal,
          }
          dispatch(createInvoice(invoice));
         }
      }
      
      
      useEffect(() => {
         if(isUpdated){
            showAlert('Order Updated' , 'success')
         }
         if(success){
            showAlert('Invoice generated' , 'success')
            navigate(`/admin/invoice/create/${invoice.order}`);
         }
        
         dispatch(singleOrderAdmin(id))
         dispatch(getStore())
      }, [dispatch,id,isUpdated,success,navigate])


      return (
   <>
{loading ? <h2>loading</h2>: 
   <div className='dashboard'>
      <Sidebar/>
      
      <div className='productListContainer'>
         <div>
           <h1>Order Details</h1>
         </div>
       
      {order && <div className='Product-list-header'>
         <div className='btn-invoice-g'>
            {!order.invoiceStatus ? <button  onClick={generateInvoice}>Generate Invoice<DescriptionIcon/></button>:<button>View Invoice<CheckCircleIcon/></button>}
            
      </div>     
            
      </div>}
        
       
        

       <div className='admin-Singleorder-details'>
         <div className='left-container'>
            {order && 
            <AdminOrderCard order={order}/>
            }
            <div className='orderStatus-container'>
             <div className='status-header'><p>Order status</p></div>
             <div className='status-stepper'>
                      <Typography>Process Order</Typography>
                      <div className='processOrderForm'>
                       {order && order.orderStatus !== "Delivered" ?  <form onSubmit={processFormHandler}>
                            
                            <select onChange={(e) => setStatus(e.target.value)}>
                                <option value="">--Choose option--</option>
                                {order && order.orderStatus === "processing" && <option value="accepted">Order Accept</option>}
                                {order && order.orderStatus === "accepted" && <option value="readytodelivered">Ready to delivered</option>}
                                {order && order.orderStatus === "readytodelivered" && <option value="onitsway">On its ways</option>}
                                {order && order.orderStatus === "onitsway" && <option value="Delivered">Order Delverd</option>}
                        
                            </select>
                           <Button disabled={loading ? true :false || status === "" ? true : false} type='submit'>Process</Button>
                        </form>:(<h1 style={{textAlign:"center"}}>Order deliverd successfully</h1>)}
                      </div>
             {/* <OrderStatusStepper/> */}
            
             </div>
          </div> 
         </div>
         <div className='right-container'>
             <div className='customer-detail card-wrapper'>
                 <div className='card'>
                    <div className='card-header'>
                       <p>Customer Detail</p>
                    </div>
                   {order &&  <div className='card-content'>
                       <div className='profile-section'>
                           <div className='profile-img'>
                              <img/>
                           </div>
                           <div className='profile-name'>
                             <p>{order.user.name}</p>
                             <p>{order.orderStatus}</p>
                           </div>
                       </div>
                       <div className='contact-detail'>
                             <div><LocalPhoneIcon  fontSize='small'/><span>{order.shippingInfo.phoneNo}</span></div>
                             <div><EmailIcon  fontSize='small'/><span>{order.user.email}</span></div>
                       </div>
                    </div>}
                 </div>
             </div>
             {order && <div className='Shipping address card-wrapper'>
             <div className='card'>
                    <div className='card-header'>
                       <p><LocationOnIcon  fontSize='small'/><span>Shipping Address</span></p>
                    </div>
                    <div className='card-content'>
                       <div className='house-address'>
                          <p>{order.shippingInfo.address}</p>
                       </div>
                       <div className='detail-addres'>
                          <p>{order.shippingInfo.city},</p>
                          <p>Phone:<b> {order.shippingInfo.phoneNo}</b></p>
                          <p><b>{order.shippingInfo.country}</b></p>
                       </div>
                       
                    </div>
                 </div>
             </div>}
             {order && <div className='payment-detail card-wrapper'>
                  <div className='card'>
                    <div className='card-header'>
                       <p><SecurityIcon fontSize='small'/><span>Payment Detail</span></p>
                    </div>
                    <div className='card-content'>
                       <div className='payment-details'>
                       <p>Transaction:<b>{order.paymentInfo.id}</b></p>
                       <p>Payment Method:<b> Cash</b></p>
                       <p>Status:<b> {order.paymentInfo.status}</b></p>
                       <p>Total Amount:<b> ₹223</b></p>
                       <p></p>
                       </div>
                       
                    </div>
                  </div>
             </div>}
         </div>
          
       </div>

      </div>
   </div>}
   </>
  )
}


export default OrderDetails