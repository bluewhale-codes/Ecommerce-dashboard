import React ,{useEffect,useState} from 'react'
import StoreSidebar from '../main/StoreSidebar';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import '../../mainCss/Home.css';



const ShippingDelivery = () => {
  const navigate = useNavigate();
  return (
    <div className='dashboard'>
      <StoreSidebar active={'ManageSite'}/>
       
      
        
      <div className='productListContainer managementHome-container'>
      
         
        <div className='header'>
              <h2>Shipping and Delivery</h2>
        </div>


        <div className='store-shipping-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Shipping</p></div>
           <p className='card-help-text'>Choose where you ship and how much you charge for shipping at checkout.</p>
            <p className='title-text'>General Shipping Rates</p>
           <div className='card-row' onClick={()=>navigate('/admin/shipping/rate')}>
                <div>
                     <p className='title-value-text'>Rates for</p>
                     <div className='Rates-tag'>
                        <LanguageIcon fontSize='small'/>
                        <p className='title-value-text'>Domestic</p>
                     </div>
                     <div className='Rates-tag'>
                        <LanguageIcon fontSize='small'/>
                        <p className='title-value-text'>International</p>
                     </div>
                </div>
                <ArrowForwardIosIcon fontSize='small'/>
           </div>
        </div>


        <div className='store-expected-date-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Expected delivery date</p></div>
           <p className='card-help-text'><span>Note:</span> Choose delivery Expected date according to your order processing time</p>
           <div className='card-row'>
                <div className='admin-site-card-input'>
                   <p className='card-input-label'>Show Delivery date at checkout</p>
                    <input type='text'/>
                </div>
           </div>
        </div>
       
       
            
       </div>
  </div>
       
     
   
  )
}


export default ShippingDelivery