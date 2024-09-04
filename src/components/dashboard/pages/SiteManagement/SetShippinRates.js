import React ,{useEffect,useState} from 'react'
import StoreSidebar from '../main/StoreSidebar';
import { Dialog , Rating ,Button, DialogActions ,DialogContent, DialogTitle} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LanguageIcon from '@mui/icons-material/Language';
import FmdGoodIcon from '@mui/icons-material/FmdGood';


import '../../mainCss/Home.css';



const SetShippinRates = () => {
    const [open, setOpen] = useState(false)

    const submitReviewToggleb = ()=> {
        open ? setOpen(false) : setOpen(true)
    }

  return (
    <div className='dashboard'>
      <StoreSidebar active={'ManageSite'}/>
       
      
        
      <div className='productListContainer managementHome-container'>
      
         
        <div className='header'>
              <h2>Set shipping Rates</h2>
        </div>


        <div className='store-shipping-rate-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>Shipping origin</p></div>
          
           <div className='card-row rate-card-row-1'>
                <FmdGoodIcon fontSize='small'/>
                <div>
                    <p className='title-text'>Shop location</p>
                    <p className='title-value-text'>India</p>
                </div>
           </div>
           <div className='card-row rate-card-row-2'>
                 <p className='title-text'>Shipping Zones</p>
                 <div>
                    <p className='title-text'>Domestic</p>
                    <div className='card-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Rate Name</th>
                                    <th>Condition</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Standard</td>
                                    <td>Min & Max</td>
                                    <td>₹100</td>
                                    <td>action</td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <Dialog aria-labelledby='simple-dialog-title' open={open} onClose={submitReviewToggleb}>
                            <DialogTitle>Add Rate</DialogTitle>
                            <DialogContent className='submitDialog'>
                                <p className='card-help-text'>Setup your own rates</p>
                                <div>
                                    <div className='admin-site-card-input'>
                                        <p className='card-input-label'>Rate name</p>
                                        <input type='text'/>
                                        <p className='card-help-text'>Customers will see this at checkout.</p>
                                    </div>
                                    <div className='admin-site-card-input'>
                                        <p className='card-input-label'>Price</p>
                                        <input type='number'/>
                                       
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div><input type='radio'/><span className='title-value-text'>Based on item weight</span></div>
                                        <div><input type='radio'/><span className='title-value-text'>Based on order price</span></div>
                                    </div>
                                    <div>
                                        <div className='admin-site-card-input'>
                                            <p className='card-input-label'>Minimun Price</p>
                                            <input type='number'/>
                                           
                                        </div>
                                        <div className='admin-site-card-input'>
                                            <p className='card-input-label'>Maximum Price</p>
                                            <input type='number'/>
                                        
                                        </div>
                                    </div>
                                </div>
                                <DialogActions>
                                    <button className='card-btn'>Cancel</button>
                                    <button className='card-btn'>Done</button>
                                </DialogActions>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <button className='card-btn' onClick={submitReviewToggleb}>Add Rates</button>
                 </div>
           </div>
        </div>


        <div className='store-expected-date-card admin-settingPage-card'>
           <div className='head'><p className='heading-text'>International</p></div>
           <p className='card-help-text'><span>Note:</span> Choose delivery Expected date according to your order processing time</p>
           <div className='card-row'>
               
           </div>
        </div>
       
       
            
       </div>
  </div>
       
     
   
  )
}

export default SetShippinRates