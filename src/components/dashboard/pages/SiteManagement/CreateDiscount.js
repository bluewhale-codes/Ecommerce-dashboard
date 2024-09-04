import React ,{useEffect,useState} from 'react'
import StoreSidebar from '../main/StoreSidebar';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LanguageIcon from '@mui/icons-material/Language';


import '../../mainCss/Home.css';



const CreateDiscount = () => {

  return (
    <div className='dashboard'>
      <StoreSidebar active={'ManageSite'}/>
       
      
        
      <div className='productListContainer managementHome-container'>
      
         
        <div className='header'>
              <h2>Create product discount</h2>
        </div>


        <div className='store-create-discount-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Amount off products</p></div>
          
            <p className='title-text'>Mothod</p>
           <div className='card-row'>
                <div className='radio-input-wrapper'>
                     <input type='radio'/><span className='title-value-text'>Discount Code</span>
                </div>
                <div className='radio-input-wrapper'>
                    <input type='radio'/><span className='title-value-text'>Automatice dicsount</span>
                </div>
           </div>

           <div className='card-row'>
                <div>
                    <p className='card-input-label'>Discount code</p>
                    <div className='admin-site-card-input'>
                      <input type='text'/>
                      <button className='card-btn'>Generate</button>
                    </div>
                    <p className='card-help-text'>Customers must enter this code at checkout.</p>
                </div>
           </div>
        </div>



        <div className='store-discount-value-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Value</p></div>
           <div className='card-row'>
                    <div className='admin-site-card-input'>
                      <input type='text'/>
                      <button className='card-btn'>Fixed</button>
                      <button className='card-btn'>Percentage</button>

                    </div>     
            </div>
          
           <div className='card-row'>
              <p className='title-text'>Applies to</p>
                <div>
                     <input type='radio'/><span className='title-value-text'>Specific collection</span>
                </div>
                <div>
                    <input type='radio'/><span className='title-value-text'>Specific product</span>
                </div>
           </div>
           <div className='card-row'>
                    <div className='admin-site-card-input'>
                      <input type='search'/>
                      <button className='card-btn'>Browse</button>    
                    </div> 
            </div>
        </div>


        <div className='store-discount-requirement-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Minimum purchase requirements</p></div>
           
   
           <div className='card-row'>
                <div>
                     <input type='radio'/><span className='title-value-text'>No minimum requirements</span>
                </div>
                <div>
                    <input type='radio'/><span className='title-value-text'>Minimum purchase amount (₹)</span>
                </div>
                <div>
                    <input type='radio'/><span className='title-value-text'>Minimum quantity of items</span>
                </div>
           </div>
          
        </div>

        <div className='store-discount-customer-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Customer eligibility</p></div>
           
   
           <div className='card-row'>
                <div>
                     <input type='radio'/><span className='title-value-text'>All customers</span>
                </div>
                <div>
                    <input type='radio'/><span className='title-value-text'>Specific Customer</span>
                </div>
                
           </div>
          
        </div>

        <div className='store-user-limit-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Maximum discount uses</p></div>
           
   
           <div className='card-row'>
                <div>
                     <input type='checkbox'/><span className='title-value-text'>Limit number of times this discount can be used in total</span>
                </div>
                <div>
                    <input type='checkbox'/><span className='title-value-text'>Limit to one use per customer</span>
                </div>
                
           </div>
          
        </div>

        <div className='store-coupon-date-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Active dates</p></div>
           
   
           <div className='card-row'>
                <div className='admin-site-card-input'>
                     <p className='title-value-text'>Start date</p>
                     <input type='date'/>
                </div>
                <div className='admin-site-card-input'>
                    <p className='title-value-text'>start time</p>
                    <input type='time'/>
                </div>
                
           </div>

           <p className='title-text'>End Date</p>
           <div className='card-row'>
                <div className='admin-site-card-input'>
                     <p className='title-value-text'>End date</p>
                     <input type='date'/>
                </div>
                <div className='admin-site-card-input'>
                    <p className='title-value-text'>End time</p>
                    <input type='time'/>
                </div>
                
           </div>
          
        </div>
        <div className='discont-coupon-footer'>
            <button className='card-btn'>Discard</button>
            <button className='card-btn'>Save discount</button>
        </div>


    
       
       
            
       </div>
  </div>
       
     
   
  )
}





export default CreateDiscount