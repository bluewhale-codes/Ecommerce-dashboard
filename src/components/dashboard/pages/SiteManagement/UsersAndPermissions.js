import React ,{useEffect,useState} from 'react'
import StoreSidebar from '../main/StoreSidebar';
import { useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LanguageIcon from '@mui/icons-material/Language';


import '../../mainCss/Home.css';



const UsersAndPermissions = () => {
  const navigate = useNavigate();

  return (
    <div className='dashboard'>
      <StoreSidebar active={'ManageSite'}/>
       
      
        
      <div className='productListContainer managementHome-container'>
      
         
        <div className='header'>
              <h2>Users and Permissions</h2>
              <p className='title-text'>Permissions</p>
              <p className='title-value-text'>Manage what users can see or do in your store.</p>
        </div>


        <div className='store-owner-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Store owner</p></div>
          
           <div className='card-row'>
                <div className='avatar'>
                    <img src='https://themesbrand.com/velzon/html/saas/assets/images/users/avatar-1.jpg'/>
                </div>
                <div className='owner-detail'>
                    <p className='title-text'>Vishal shakya</p>
                    <p className='title-value-text'>Last login was Friday, October 27, 2023 12:57 AM GMT+5:30</p>
                </div>
           </div>
        </div>


        <div className='store-staf-date-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Staff</p></div>
          
           <div className='card-row'>
                <p className='card-help-text'>Customize what your staff members can edit and access. You can add up to 2 staff members on this plan.</p>
                <button className='card-btn' onClick={()=>navigate('/admin/create/staf')} >Add staff</button>
           </div>
        </div>
       
       
            
       </div>
  </div>
       
     
   
  )
}




export default UsersAndPermissions