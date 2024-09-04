import React ,{useEffect,useState} from 'react'
import StoreSidebar from '../main/StoreSidebar';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LanguageIcon from '@mui/icons-material/Language';
import { useNavigate } from 'react-router-dom';


import '../../mainCss/Home.css';



const DiscountCoupon = () => {
    const navigate = useNavigate()

  return (
    <div className='dashboard'>
      <StoreSidebar active={'ManageSite'}/>
       
      
        
      <div className='productListContainer managementHome-container'>
      
         
        <div className='header'>
              <h2>Discount Coupons</h2>
        </div>


        <div className='store-shipping-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Manage discounts and promotions</p></div>
           <p className='card-help-text'>Create discount codes and automatic discounts that apply at checkout</p>
            
           <div className='card-row'>
                <div>
                     <img src='https://cdn.shopify.com/shopifycloud/web/assets/v1/b8d201c5328e302a.svg'/>
                     <button onClick={()=>navigate('/admin/create/discount')} className='card-btn'>Create discount</button>
                </div>
           </div>
        </div>


        
       
       
            
       </div>
  </div>
       
     
   
  )
}


export default DiscountCoupon