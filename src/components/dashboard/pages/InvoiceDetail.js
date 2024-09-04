import React, { useEffect ,useState } from 'react'
import Loader from './main/Loader';
import Sidebar from './main/Sidebar';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';

import '.././mainCss/productList.css'
import '.././mainCss/invoiceDetail.css'


const InvoiceDetail = () => {
  
  return (
   <>

       
   <div className='dashboard'>
      <Sidebar/>
        <div className='productListContainer Invoice-detail-container'>

        <div className='invoice-detail-header'>
                   <p>Invoice Detail</p>
        </div>

        
       
              
      
                
                <div className='invoice-detail-wrapper'>
                      <div className='invoice-page'>
                          <div>
                                 {/* top header-start */}
                                  <div className='invoicePage-top-header'>
                                       <div>
                                             <div className='company-logo'> 
                                                <img src='https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1695921155/QXZhdGFycy9kb3dubG9hZF8yXzFfdjNobXJp/grid_landscape'/>
                                             </div>
                                             <div className='company-address'>
                                                  <ul>
                                                    <li>ADDRESS</li>
                                                    <li>India,chandigarh</li>
                                                    <li>Pincode:160012</li>
                                                  </ul>
                                             </div>
                                       </div>
                                       <div className='company-detai'>
                                              <p><span>Email</span>Vishalshakya@gmail.com</p>
                                              <p><span>Website</span>blueWhaleecoom.com</p>
                                              <p><span>Contact No.</span>+91 9855104673</p>
                                              <p><span>Legal Registratino no.</span>413435215</p>
                                             
                                       </div>
                                  </div>
                                  {/* top header --end */}

                                  {/* invoice detial --start */}
                                  <div className='invoice-detail-row'> 
                                     <div className='detail'>
                                        <p className='header'>Invoice no.</p>
                                        <p className='header-value'>#345435</p>
                                     </div>
                                     <div className='detail'>
                                        <p className='header'>Date</p>
                                        <p className='header-value'>25 january 2023</p>
                                     </div>
                                     <div className='detail'>
                                        <p className='header'>Payment status</p>
                                        <p className='header-value'><span>Paid</span></p>
                                     </div>
                                     <div className='detail'>
                                        <p className='header'>Total Amount</p>
                                        <p className='header-value'>₹2000</p>
                                     </div>
                                  </div>
                                  {/* invoice detial --end */}

                                  <div className='invoice-address-row'>
                                       <div className='address'>
                                             <h4>Billing address</h4>
                                             <p>vishal shakya</p>
                                             <p>#house no.28 type 13 D pgi campus</p>
                                             <p><span>Phone:</span>4224323</p>
                                             <p></p>
                                       </div>
                                       <div className='address'>
                                            <h4>Shipping address</h4>
                                             <p>vishal shakya</p>
                                             <p>#house no.28 type 13 D pgi campus</p>
                                             <p><span>Phone:</span>:4224323</p>
                                             <p></p>
                                       </div>
                                  </div>

                          </div>

                          {/* part 2 start */}
                          <div>
                                   {/* tavble start */}
                                   <div className='product-detail-table-row'>
                                        <table>
                                                    <tr className='header-row'>
                                                        
                                                        <th className='header1'>Product detail</th>
                                                        <th className='header2'>Price</th>
                                                        <th className='header2'>Quantity</th>
                                                        <th className='header2'>Amount</th>
                                                    </tr>
                                                    <tbody>
                                                    <tr>
                                                      
                                                      <td>
                                                          <p>Men Tshirt Pumma</p>
                                                      </td>
                                                      <td className='table-data'><span>₹300</span></td>
                                                      <td className='table-data'><span>05</span></td>
                                                      <td className='table-data'><span>$1500</span></td>
                                                     </tr>
                                                    <tr>
                                                      
                                                      <td>
                                                          <p>Men Tshirt Pumma</p>
                                                      </td>
                                                      <td className='table-data'><span>₹300</span></td>
                                                      <td className='table-data'><span>05</span></td>
                                                      <td className='table-data'><span>$1500</span></td>
                                                     </tr>
                                                  
                                                    </tbody>
                                                    
                                        </table>
                                   </div>
                                   {/* table-- end */}
                                   {/* subtotal start */}
                                   <div className='subtotal-row'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>SubTotal</td>
                                                <td>2000</td>
                                            </tr>
                                            <tr>
                                                <td>Estimated Tax(12%)</td>
                                                <td>452</td>
                                            </tr>
                                            <tr>
                                                <td>Discount</td>
                                                <td>Ckk45</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping charges</td>
                                                <td>40</td>
                                            </tr>
                                            <tr className='total-amount'>
                                                <td>Total Amount</td>
                                                <td>$2000</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                   </div>
                                   {/* subtotal end */}
                                   {/* payment detail row -start */}
                                     <div className='payment-detail-row'>
                                        <h4>Payment Detail</h4>
                                        <p><span>Payment Method:</span>Master card</p>
                                        <p><span>Card Holder:</span>Vishal shakya</p>
                                        <p><span>Card Number:</span>2341-434-3243-324</p>
                                        <p><span>Total Amount:</span>$200</p>
                                     </div>
                                   {/* payment detail row -end */}
                                   

                          </div>
                           <div className='invoice-page-footer'>
                                  <div>
                                     <button><PrintIcon fontSize='small' /><span>Print</span></button> 
                                     <button><DownloadIcon fontSize='small'/><span>Download</span></button> 
                                  </div>
                           </div>
                          {/*  part 2 end */}

                      </div>
                </div>
      
        </div>
   
   </div>
  
   </>
  )
}



export default InvoiceDetail