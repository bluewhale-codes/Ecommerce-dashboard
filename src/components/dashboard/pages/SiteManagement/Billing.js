import React ,{useEffect,useState} from 'react'
import StoreSidebar from '../main/StoreSidebar';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LanguageIcon from '@mui/icons-material/Language';


import '../../mainCss/Home.css';


const Billing = () => {

  return (
    <div className='dashboard'>
      <StoreSidebar active={'ManageSite'}/>
       
      
        
      <div className='productListContainer managementHome-container'>
      
         
        <div className='header'>
              <h2>Billing</h2>
        </div>


        <div className='store-payment-method-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Payment methods</p></div>
           
           <div className='card-row'>
                <p className='card-help-text'>Add a payment method for purchases and bills in Shopify.</p>
           </div>
           <button className='card-btn'>Add payment method</button>
        </div>


        <div className='store-expected-date-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Billing currency</p></div>
           
           <div className='card-row'>
                
                   <p className='card-help-text'>Your current billing currency is set to <b>INR (Indian Rupee).</b></p>

           </div>
           <button className='card-btn'>Change billing currency</button>
        </div>
       
       
            
       </div>
  </div>
       
     
   
  )
}


export default Billing