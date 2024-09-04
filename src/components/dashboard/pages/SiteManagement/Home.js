import React ,{useEffect,useState} from 'react'
import StoreSidebar from '../main/StoreSidebar';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StorefrontIcon from '@mui/icons-material/Storefront';


import '../../mainCss/Home.css';



const Home = () => {

  return (
    <div className='dashboard'>
      <StoreSidebar active={'ManageSite'}/>
       
      
        
      <div className='productListContainer managementHome-container'>
      
         
        <div className='header'>
              <h2>Store Detail</h2>
        </div>

        <div className='store-profile-card admin-settingPage-card'>
             <div className='head'><p className='heading-text'>Profile</p></div>
             <div className='profile-detail-row'>
                  <div className='flex-row-1'>
                        <div className='store-detail-wrapper'>
                            <div><StorefrontIcon fontSize='small'/></div>
                            <div className='detail'>
                                <p className='title-value-text'>Store Name</p>
                                <p className='title-text'>BluewhaleEcoomerce</p>
                            </div>
                        </div>
                        <div className='store-detail-wrapper'>
                           <div><EmailIcon fontSize='small'/></div>
                            <div className='detail'>
                                <p className='title-value-text'>Email</p>
                                <p className='title-text'>vishalshakya2255@gmail.com</p>
                            </div>
                        </div>
                  </div>
                  <div className='flex-row-2'>
                    <div className='store-detail-wrapper'>
                           <div><LocalPhoneIcon fontSize='small'/></div>
                            <div className='detail'>
                                <p className='title-value-text'>Contact</p>
                                <p className='title-text'>+91 9855104673</p>
                            </div>
                    </div>

                  </div>
             </div>
        </div>
        <div className='store-Billing-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Billing Information</p></div>
           <div className='detail'>
              <p className='title-value-text'>Billing Address</p>
              <p className='title-text'>India</p>
           </div>
        </div>

        <div className='store-currency-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Store Currency</p></div>
           <p className='card-help-text'>The currency your products are sold in. For your payout currency</p>
           <div className='detail'>
              <div className='input-wrapper admin-site-card-input'>
                  <p className='card-input-label'>Select Store Currency</p>
                  <input type='text'/>
              </div>
           </div>
        </div>
       
       
            
       </div>
  </div>
       
     
   
  )
}



export default Home