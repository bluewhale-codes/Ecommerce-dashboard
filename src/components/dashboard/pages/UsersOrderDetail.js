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
import { Alert } from '@mui/material';
import Loader from './main/Loader';
import { singleOrderAdmin } from '../../../actions/ordersActions';
import AdminOrderCard from './subcomponent/AdminOrderCard';

const UsersOrderDetail = () => {



   const {loading,order} = useSelector((state)=>state.orderDetail)
   const dispatch = useDispatch();
   const navigate = useNavigate()

   const {id} = useParams()
   useEffect(() => {
    
      dispatch(singleOrderAdmin(id))
   }, [dispatch,id])
   

   
  return (
   <>
{loading ? <h2>loading</h2>: 
   <div className='dashboard'>
      <Sidebar/>
      <div className='productListContainer'>
       
        <div className='Product-list-header'>
            <div>
              <h3>23141BCH321</h3>
            </div>
            
       </div>
       
        

       <div className='admin-Singleorder-details'>
         <div className='left-container'>
            {order && 
            <AdminOrderCard order={order}/>
            }
            {/* <div className='orderStatus-container'>
             <div className='status-header'><p>Order status</p></div>
             <div className='status-stepper'>
             <OrderStatusStepper/>
             </div>
          </div> */}
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


export default UsersOrderDetail