import React from 'react'
import '../../mainCss/sideBar.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Link ,useNavigate} from "react-router-dom"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LockClockIcon from '@mui/icons-material/LockClock';
import SellIcon from '@mui/icons-material/Sell';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';




const Sidebar = ({active}) => {
 
  const navigate = useNavigate()

  return (
    <div className='sidebar'>
      

          <div className='website-logo'>
                <img src='https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1695921155/QXZhdGFycy9kb3dubG9hZF8yXzFfdjNobXJp/grid_landscape'/>
          </div>
         
          <div className='manage-site-link-container'>
                    <p><b>Managment</b></p>
                    <div  className={`manage-site-link ${active==='Dashboard' && 'manage-site-link-active'}`} onClick={()=>navigate('/admin/dashboard')}>
                        <div>
                              <SpaceDashboardIcon/><p>Dashboard</p>
                        </div>
                        <div>
                           <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className={`manage-site-link ${active==='Users' && 'manage-site-link-active'}`} onClick={()=>navigate('/admin/customers')}>
                        <div>
                              <PeopleIcon/><p>Users</p>
                        </div>
                        <div>
                           <ChevronRightIcon/>
                        </div>
                    </div>
                    <div  className={`manage-site-link ${active==='Products' && 'manage-site-link-active'}`} onClick={()=>navigate('/admin/products')}>

                            <div>
                                    <ShoppingBagIcon/><p>Products</p>
                              </div>
                              <div>
                                <ChevronRightIcon/>
                              </div>
                       
                    </div>
                    
                    <div className={`manage-site-link ${active==='Orders' && 'manage-site-link-active'}`} onClick={()=>navigate('/admin/orders')}>
                        <div>
                              <LockClockIcon/><p>Orders</p>
                        </div>
                        <div>
                           <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className={`manage-site-link ${active==='Seller' && 'manage-site-link-active'}`} onClick={()=>navigate("/admin/sellers")}>
                        <div>
                              <SellIcon/><p>Sellers</p>
                        </div>
                        <div>
                           <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className={`manage-site-link ${active==='Invoice' && 'manage-site-link-active'}`} onClick={()=>navigate("/admin/invoice")}>
                        <div>
                              <ReceiptLongIcon/><p>Invoice</p>
                        </div>
                        <div>
                           <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className={`manage-site-link ${active==='Reviews' && 'manage-site-link-active'}`} onClick={()=>navigate("/admin/customer/reviews")}>
                        <div>
                              <ReviewsIcon/><p>Reviews</p>
                        </div>
                        <div>
                        <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className={`manage-site-link ${active==='SiteManage' && 'manage-site-link-active'}`} onClick={()=>navigate("/admin/site/management")}>
                        <div>
                              <ManageAccountsIcon/><p>Manage Your Site</p>
                        </div>
                        <div>
                        <ChevronRightIcon/>
                        </div>
                    </div>
                    
          </div>
    </div>
  )
}

export default Sidebar