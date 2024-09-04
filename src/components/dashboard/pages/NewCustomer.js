import React ,{useEffect,useState} from 'react';
import Sidebar from './main/Sidebar';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import '.././mainCss/Home.css';



const NewCustomer = () => {
  const navigate = useNavigate();
  return (
    <div className='dashboard'>
       <Sidebar/>
      
        
      <div className='productListContainer managementHome-container'>
         
        <div className='header'>
              <h2>Add new customer</h2>
        </div>


         <div className='store-create-customer-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Customer Overview</p></div>
            
           <div className='card-row'>
                
                  <div className='card-sub-row'>
                    <div className='admin-site-card-input'>
                      <p className='card-input-label'>First name</p>
                      <input type='text'/>
                    </div>
                    <div className='admin-site-card-input'>
                      <p className='card-input-label'>last name</p>
                      <input type='text'/>
                    </div>
                  </div>
                
           </div>
           <div className='card-row'>
                  <div className='admin-site-card-input'>
                   <p className='card-input-label'>Language</p>
                    <input type='text'/>
                  </div>
                  <div className='admin-site-card-input'>
                   <p className='card-input-label'>Email</p>
                    <input type='text'/>
                  </div>
                  <div className='admin-site-card-input'>
                   <p className='card-input-label'>Phone</p>
                    <input type='text'/>
                  </div>
                  <div className='admin-site-card-input'>
                   <p className='card-input-label'>Show Delivery date at checkout</p>
                    <input type='text'/>
                  </div>
           </div>
        </div>


        <div className='store-customer-address-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Address</p></div>
           <p className='card-help-text'>The primary address of this customer</p>
           <div className='card-row'> 
                   <div className='admin-site-card-input'>
                    <p className='card-input-label'>Country/region</p>
                    <input type='text'/>
                  </div>
                   <div className='card-sub-row'>
                        <div className='admin-site-card-input'>
                          <p className='card-input-label'>First name</p>
                          <input type='text'/>
                        </div>
                        <div className='admin-site-card-input'>
                          <p className='card-input-label'>Last name</p>
                          <input type='text'/>
                        </div>
                   </div>
                   <div className='admin-site-card-input'>
                          <p className='card-input-label'>Company</p>
                          <input type='text'/>
                   </div>
                   <div className='admin-site-card-input'>
                          <p className='card-input-label'>Address</p>
                          <input type='text'/>
                   </div>
                   <div className='admin-site-card-input'>
                          <p className='card-input-label'>Apartment,suit etc.</p>
                          <input type='text'/>
                   </div>
                   <div className='card-sub-row'>
                        <div className='admin-site-card-input'>
                          <p className='card-input-label'>City</p>
                          <input type='text'/>
                        </div>
                        <div className='admin-site-card-input'>
                          <p className='card-input-label'>State</p>
                          <input type='text'/>
                        </div>
                   </div>
                    <div className='card-sub-row'>
                        <div className='admin-site-card-input'>
                          <p className='card-input-label'>Pincode</p>
                          <input type='text'/>
                        </div>
                        <div className='admin-site-card-input'>
                          <p className='card-input-label'>Phone no.</p>
                          <input type='text'/>
                        </div>
                    </div>
           </div>
        </div>
       
       
            
       </div>
  </div>
       
     
   
  )
}


export default NewCustomer