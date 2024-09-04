import React ,{useEffect,useState} from 'react'
import StoreSidebar from '../main/StoreSidebar';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LanguageIcon from '@mui/icons-material/Language';


import '../../mainCss/Home.css';



const CreateStaff = () => {

  return (
    <div className='dashboard'>
      <StoreSidebar active={'ManageSite'}/>
       
      
        
      <div className='productListContainer managementHome-container'>
      
         
        <div className='header'>
              <h2>Add staff</h2>
        </div>
        <div>
            <p className='heading-text'>Staf</p>
            <p className='card-help-text'>Give staff access to your store by sending them an invitation. If youre working with a designer, developer, or marketer,</p>
        </div>

        <div className='store-staf-create-form-card admin-settingPage-card'>
           <div className='card-row'>
                
                    <div className='admin-site-card-input'>
                        <p className='card-input-label'>First name</p>
                        <input type='text'/>
                    </div>
                    <div className='admin-site-card-input'>
                        <p className='card-input-label'>Last name</p>
                        <input type='text'/>
                    </div>
                
           </div>
           <p className='card-help-text'>Enter the staff member's first and last name as they appear on their government-issued ID</p>
           <div className='card-row'>
                    <div className='admin-site-card-input'>
                        <p className='card-input-label'>Enter email</p>
                        <input type='text'/>
                    </div>
                    <div className='admin-site-card-input'>
                        <p className='card-input-label'>Valid ID</p>
                        <input type='text'/>
                    </div>
           </div>
        </div>


        <div className='store-staf-permission-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Staf permissions</p></div>
           <p className='card-help-text'>Manage permissions for My Store</p>
           <div className='card-row'>
                
                
           </div>
        </div>
       
       
            
       </div>
  </div>
       
     
   
  )
}


export default CreateStaff