import React from 'react'
import '../../mainCss/sideBar.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Link ,useNavigate} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SellIcon from '@mui/icons-material/Sell';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import StorefrontIcon from '@mui/icons-material/Storefront';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';





const StoreSidebar = ({active}) => {
 
  const navigate = useNavigate()

  return (
    <div className='sidebar'>
      

          <div className='website-logo'>
                <img src='https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1695921155/QXZhdGFycy9kb3dubG9hZF8yXzFfdjNobXJp/grid_landscape'/>
          </div>
         
          <div className='manage-site-link-container'>
                    <p><b>My Store</b></p>
                    <div  className={`manage-site-link ${active==='Dashboard' && 'manage-site-link-active'}`} onClick={()=>navigate('/admin/site/management')}>
                        <div>
                              <StorefrontIcon fontSize='small'/><p>Store Detail</p>
                        </div>
                        <div>
                           <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className={`manage-site-link ${active==='Users' && 'manage-site-link-active'}`} onClick={()=>navigate('/admin/store/billing')}>
                        <div>
                              <PaymentIcon fontSize='small'/><p>Billing</p>
                        </div>
                        <div>
                           <ChevronRightIcon/>
                        </div>
                    </div>
                    <div  className={`manage-site-link ${active==='Products' && 'manage-site-link-active'}`} onClick={()=>navigate('/admin/store/permissions')}>

                            <div>
                                    <ShoppingCartIcon fontSize='small'/><p>User and permissions</p>
                              </div>
                              <div>
                                <ChevronRightIcon/>
                              </div>
                       
                    </div>
                    
                    <div className={`manage-site-link ${active==='Orders' && 'manage-site-link-active'}`} onClick={()=>navigate('/admin/site/shipping&Delivery')}>
                        <div>
                              <LocalShippingIcon fontSize='small'/><p>Shipping and Delivery</p>
                        </div>
                        <div>
                           <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className={`manage-site-link ${active==='Seller' && 'manage-site-link-active'}`} onClick={()=>navigate("/admin/site/discount")}>
                        <div>
                              <CardGiftcardIcon fontSize='small'/><p>Discount Coupons</p>
                        </div>
                        <div>
                           <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className={`manage-site-link ${active==='Invoice' && 'manage-site-link-active'}`} onClick={()=>navigate("/admin/invoice")}>
                        <div>
                              <DataThresholdingIcon fontSize='small'/><p>Custom Data</p>
                        </div>
                        <div>
                           <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className={`manage-site-link ${active==='Reviews' && 'manage-site-link-active'}`} onClick={()=>navigate("/admin/customer/reviews")}>
                        <div>
                              <LocationOnIcon fontSize='small'/><p>Location</p>
                        </div>
                        <div>
                        <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className={`manage-site-link ${active==='SiteManage' && 'manage-site-link-active'}`} onClick={()=>navigate("admin/store/domain")}>
                        <div>
                              <LanguageIcon fontSize='small'/><p>Domain</p>
                        </div>
                        <div>
                        <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className={`manage-site-link ${active==='SiteManage' && 'manage-site-link-active'}`} onClick={()=>navigate("/admin/store/promotions")}>
                        <div>
                              <LocalActivityIcon fontSize='small'/><p>Promotional Activity</p>
                        </div>
                        <div>
                        <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className={`manage-site-link ${active==='SiteManage' && 'manage-site-link-active'}`} onClick={()=>navigate("/admin/site/management")}>
                        <div>
                              <ManageAccountsIcon fontSize='small'/><p>Pages</p>
                        </div>
                        <div>
                        <ChevronRightIcon/>
                        </div>
                    </div>
                    
          </div>
    </div>
  )
}


export default StoreSidebar