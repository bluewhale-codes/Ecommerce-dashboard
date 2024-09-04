import React ,{useEffect,useState} from 'react'
import Sidebar from './main/Sidebar';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ColorTabs from './subcomponent/TableTab';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { getUserDetail } from '../../../actions/userActions';
import { getShippingInfo } from '../../../actions/ordersActions';
import { UseSelector , useDispatch, useSelector } from 'react-redux';
import { useNavigate  , Link , useParams} from 'react-router-dom';
import '.././mainCss/dashboard.css'
import '.././mainCss/customerDetail.css'
import Loader from './main/Loader';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';



const CustomerDetail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(() => {
    
     dispatch(getUserDetail(id));
     dispatch(getShippingInfo(id))

  }, [dispatch,id])


  const getOrders = ()=>{
    navigate(`/order/customer/${id}`)
  }

  const { loading , user} = useSelector((state)=>state.userDetail)
  const {AddressInfo} = useSelector((state)=>state.shippingInfo)
  
  
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

         <div className='customer-detail-content'>
              <div className='customerData-Admin'>
                    <div className='right-container customer-detail-admin'>
                      <div className='customer-detail card-wrapper'>
                          <div className='card'>
                              <div className='card-header'>
                                <p>Customer Detail</p>
                              </div>
                              <div className='card-content'>
                                <div className='profile-section'>
                                    <div className='profile-img'>
                                       {user.avatar && <img src={user.avatar.url}/>}
                                    </div>
                                    <div className='profile-name'>
                                      <p>{user.name}</p>
                                      <p>{user.role}</p>
                                    </div>
                                </div>
                                <div className='contact-detail'>
                                      <div><LocalPhoneIcon  fontSize='small'/><span>9855104673</span></div>
                                      <div><EmailIcon  fontSize='small'/><span>{user.email}</span></div>
                                </div>
                              </div>
                          </div>
                      </div>
                      {AddressInfo != null?<div className='Shipping address card-wrapper'>
                      <div className='card'>
                            <div className='card-header'>
                                <p><LocationOnIcon  fontSize='small'/><span>Shipping Address</span></p>
                              </div>
                              {AddressInfo.shippingInfo && <div className='card-content'>
                                <div className='house-address'>
                                    <p>{AddressInfo.shippingInfo.address}</p>
                                </div>
                                <div className='detail-addres'>
                                    <p>{AddressInfo.shippingInfo.city},</p>
                                    <p>Phone:<b> {AddressInfo.shippingInfo.phoneNo}</b></p>
                                    <p><b>{AddressInfo.shippingInfo.pinCode}-{AddressInfo.shippingInfo.country}</b></p>
                                </div>
                                
                              </div>}
                          </div>
                      </div>:<div className='Shipping address card-wrapper'>
                      <div className='card'>
                            <div className='card-header'>
                                <p><LocationOnIcon  fontSize='small'/><span>Shipping Address</span></p>
                              </div>
                              <div className='no-address'>
                                {AddressInfo==null && <h4>No Address Added</h4>} 
                              </div>
                          </div>
                      </div>}
                      {/* <div className='Shipping address card-wrapper'>
                      <div className='card'>
                              <div className='card-header'>
                                <p><LocationOnIcon  fontSize='small'/><span>Billing Address</span></p>
                              </div>
                              <div className='card-content'>
                                <div className='house-address'>
                                    <p>House no.2 type 13D pgi campus sector 12 chandigarh</p>
                                </div>
                                <div className='detail-addres'>
                                    <p>Chandigarh,</p>
                                    <p>Phone:<b> 9855104673</b></p>
                                    <p><b>India</b></p>
                                </div>
                                
                              </div>
                          </div>
                      </div> */}
                      
                    </div>
                    
              </div>
              <div className='recent-activity-container'>
                   <div className='header'>
                      <div>
                         <p>Customer Activity</p>
                      </div>
                      <div>
                          <ColorTabs/>
                      </div>
                   </div>

                  <div className='activity-detail-container'>
                      <Link to={`/order/customer/${id}`}>
                       <div className='activity-customer'>
                            <div>
                                <p>All Orders</p>
                            </div>
                            <div>
                                
                            </div>
                            <div>
                            <ChevronRightIcon/>
                            </div>
                       </div>
                       </Link>
                       {/* <div className='activity-customer'>
                            <div>
                                <p>Review made By customer</p>
                            </div>
                            <div>
                                <p>3</p>
                            </div>
                            <div>
                                  <ChevronRightIcon/>
                            </div>
                       </div> */}
                       {/* <div className='activity-customer'>
                            <div>
                                <p>Product Purchase by customers</p>
                            </div>
                            <div>
                                <p>45</p>
                            </div>
                            <div>
                                  <ChevronRightIcon/>
                            </div>
                       </div> */}
                       {/* <div className='activity-customer'>
                            <div>
                                <p>Payments and subscription</p>
                            </div>
                            <div>
                                <p>45</p>
                            </div>
                            <div>
                                  <ChevronRightIcon/>
                            </div>
                       </div> */}
                       {/* <div className='activity-customer'>
                            <div>
                                <p>Shipping and Billing address</p>
                            </div>
                            <div>
                                <p>45</p>
                            </div>
                            <div>
                                  <ChevronRightIcon/>
                            </div>
                       </div> */}
                                
                           
                  </div>
                  
              </div>
        </div>

        

       </div>
        
       
    </div>
      
   
    
</div>
  )
}



export default CustomerDetail