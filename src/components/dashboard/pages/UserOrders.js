import React ,{useEffect,useState} from 'react'
import Sidebar from './main/Sidebar';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ColorTabs from './subcomponent/TableTab';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { getUserDetail } from '../../../actions/userActions';
import { getShippingInfo , userOrderAdmin } from '../../../actions/ordersActions';
import { UseSelector , useDispatch, useSelector } from 'react-redux';
import { useNavigate  , Link , useParams} from 'react-router-dom';
import '.././mainCss/dashboard.css'
import '.././mainCss/customerDetail.css'
import Loader from './main/Loader';
import UserOrder from './subcomponent/UserOrder';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';



const UserOrders = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    
     dispatch(getUserDetail(id));
     dispatch(userOrderAdmin(id));
  }, [dispatch,id])

  const { loading , user} = useSelector((state)=>state.userDetail)
  const {orders} = useSelector((state)=>state.adminAllOrders)
  
  
  return (

    <div className='dashboard'>
    
        
      <Sidebar/>
    <div className='dashboardContainer'>
      
       <div className='customer-detail-container'>
         
         <div className='customer-detail-header-wrapper'>
            {loading ? <>
              <Stack spacing={1}>
                  {/* For variant="text", adjust the height via font-size */}
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                  {/* For other variants, adjust the size with `width` and `height` */}
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="rectangular" width={210} height={60} />
                  <Skeleton variant="rounded" width={210} height={60} />
              </Stack>
            </>:
            <div className='top-header'>
                    <div>
                      {user.avatar && <img src={user.avatar.url}/>}
                    </div>
                    <div className='detail'>
                        <p>{user.name}</p>
                        <p>{user.role}</p>
                        <p>{user.email}</p>
                    </div> 
            </div>
            }
             
            <div>
               <button>Update User</button>
            </div>
         </div>


       </div>
        
        <div className='UserOrderContainer'>
             {orders && orders.length !== 0 ? (
                       <div className='myOrderContainer'>
                        {orders && orders.map((order)=> <UserOrder order={order} />)}
                         
                       </div>
                   ) : <div className='no-order-found'>
                           <div className='no-order-image'>
                            <p>No ordrs Found for this user!</p>
                             <img src='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=1060&t=st=1707150973~exp=1707151573~hmac=190d07f9221613d47f4af7026eb59ba75bb3508148eeae48326c931e8026bfb5'/>
                           </div>
                    </div>}
        </div>
       
    </div>
      
   
    
</div>
  )
}



export default UserOrders