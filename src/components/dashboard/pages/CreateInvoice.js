import React, { useEffect ,useState } from 'react'
import Loader from './main/Loader';
import Sidebar from './main/Sidebar';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { getInvoice } from '../../../actions/ordersActions';

import '.././mainCss/productList.css'
import '.././mainCss/invoiceDetail.css'
import '.././mainCss/createInvoice.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useSelection from 'antd/es/table/hooks/useSelection';


const CreateInvoice = () => {
  const {id} = useParams();
  const dispatch = useDispatch();

  const {invoic} = useSelector((state)=>state.newInvoice)
  useEffect(() => {

    dispatch(getInvoice(id))
 }, [dispatch,id])

  return (
   <>

    {invoic &&   
   <div className='dashboard'>
      <Sidebar/>
        <div className='productListContainer Invoice-detail-container'>

        <div className='invoice-detail-header'>
                   <p>Create Invoice</p>
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
                                                  <div className='input-wrapper-invoice'>
                                                     <div>
                                                     <p className='label-text-invoice'>Address:</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.companyinfo.address}</p>
                                                     </div>
                                                  </div>
                                                  <div className='input-wrapper-invoice'>
                                                    <div>
                                                     <p className='label-text-invoice'>Pincode :</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.companyinfo.pinCode}</p>
                                                     </div>
                                                     
                                                  </div>
                                                  {/* <ul>
                                                    <li>ADDRESS</li>
                                                    <li>India,chandigarh</li>
                                                    <li>Pincode:160012</li>
                                                  </ul> */}
                                             </div>
                                       </div>
                                       {invoic && <div className='company-detai'>
                                            <div className='input-wrapper-invoice'>
                                                
                                                     <div>
                                                     <p className='label-text-invoice'>Business Email :</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.companyEmail}</p>
                                                     </div>
                                            </div>
                                            <div className='input-wrapper-invoice'>
                                                
                                                     <div>
                                                     <p className='label-text-invoice'>Website:</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.companyEmail}</p>
                                                     </div>
                                            </div>
                                            <div className='input-wrapper-invoice'>
                                               
                                                    <div>
                                                     <p className='label-text-invoice'>Website:</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.companyinfo.phoneNo} </p>
                                                     </div>
                                            </div>
                                            <div className='input-wrapper-invoice'>
                                                <input type='number' placeholder='Legal Registration No.'/>
                                            </div>
                                          
                                              {/* <p><span>Email</span>Vishalshakya@gmail.com</p>
                                              <p><span>Website</span>blueWhaleecoom.com</p>
                                              <p><span>Contact No.</span>+91 9855104673</p>
                                              <p><span>Legal Registratino no.</span>413435215</p> */}
                                             
                                       </div>}
                                  </div>
                                  {/* top header --end */}

                                  {/* invoice detial --start */}
                                  {invoic && <div className='invoice-detail-row'> 
                                     <div className='detail'>
                                        <p className='header'>Invoice no.</p>
                                        <div className='input-wrapper-invoice'>
                                            <input type='text' value={invoic._id}/>
                                            
                                        </div>
                                     </div>
                                     <div className='detail'>
                                        <p className='header'>Date</p>
                                        <div className='input-wrapper-invoice'>
                                            <input type='date' placeholder='Select-Date-Time'/>
                                        </div>
                                     </div>
                                     <div className='detail'>
                                        <p className='header'>Payment status</p>
                                        <div className='input-wrapper-invoice'> 
                                             <select  placeholder='Select Payment Status'>
                                                  <option>Select Payment status</option>
                                                  <option>Debit Card</option>
                                                  <option>Credit Card</option>
                                                  <option>UPI</option>
                                             </select>
                                        </div>
                                     </div>
                                     <div className='detail'>
                                        <p className='header'>Total Amount</p>
                                        <div className='input-wrapper-invoice'>
                                            <input value={invoic.subTotal} placeholder='₹2000' type='number'/>
                                            
                                        </div>
                                     </div>
                                  </div>}
                                  {/* invoice detial --end */}
                                  <div className='invoice-address-row'>
                                       <div className='address'>
                                           <h3>Buyer</h3>
                                            <div className='input-wrapper-invoice'>
                                                    <div>
                                                     <p className='label-text-invoice'>Name:</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.Seller}</p>
                                                     </div>
                                               
                                            </div>
                                            <div className='input-wrapper-invoice'>
                                                      <div>
                                                     <p className='label-text-invoice'>State:</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.shippingInfo.state}</p>
                                                     </div>
                                         

                                           
        
                                            </div>
                                            <div className='input-wrapper-invoice'>
                                                    <div>
                                                     <p className='label-text-invoice'>Mobile no :</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.shippingInfo.phoneNo}</p>
                                                     </div>
                                              
                                            </div>
                                            
                                             {/* <h4>Billing address</h4>
                                             <p>vishal shakya</p>
                                             <p>#house no.28 type 13 D pgi campus</p>
                                             <p><span>Phone:</span>4224323</p>
                                             <p></p> */}
                                       </div>
                                       <div className='address'>
                                           <h3>Shipping Info</h3>
                                            <div className='input-wrapper-invoice'>
                                                     <div>
                                                     <p className='label-text-invoice'>Shipping Address:</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.shippingInfo.address}</p>
                                                     </div>
                                            </div>
                                            <div className='input-wrapper-invoice'>
                                                    <div>
                                                     <p className='label-text-invoice'>State :</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.shippingInfo.city}-{invoic.shippingInfo.pinCode}</p>
                                                     </div>
        
                                            </div>
                                            <div className='input-wrapper-invoice'>
                                                     <div>
                                                     <p className='label-text-invoice'>Mobile no :</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.shippingInfo.phoneNo}</p>
                                                     </div>
                                            </div>
                                       </div>
                                  </div>

                          </div>

                          {/* part 2 start */}
                          <div>
                                   {/* tavble start */}

                                   <div className='product-detail-table-row addInvoice-product'>
                                        <table>
                                                    <tr className='header-row'>
                                                        
                                                        <th className=''>Description of Goods</th>
                                                        <th className='headerP'>Price</th>
                                                        <th className='headerQ'>Quantity</th>
                                                        <th className='headerAM'>Amount</th>
                                                        <th className='headerAM'></th>
                                                    </tr>
                                                    <tbody>
                                       {invoic && invoic.orderItems.map((item)=>
                                                    <tr>
                                                        <td>
                                                            <div className='input-wrapper-invoice'>
                                                           
                                                            <div className='invoice-detail-block'>
                                                                <p>{item.name}</p>
                                                            </div>
                                                            </div>
                                                            <div className='input-wrapper-invoice'>
                                                                <input type='text' placeholder='Product Detail'/>
                                                            </div>
                                                        </td>
                                                        <td className='table-data'>
                                                             <div className='input-wrapper-invoice'> 
                                                                <input type='number' value={item.price} placeholder='0.00'/>
                                                             </div>
                                                        </td>
                                                        <td className='table-data'> 
                                                             <div className='input-wrapper-invoice'> 
                                                                <input type='number' value={item.quantity} placeholder='0.00'/>
                                                             </div>
                                                        </td>
                                                        <td className='table-data table-end-data'>
                                                             <div className='input-wrapper-invoice'> 
                                                                <input type='number' value={item.quantity*item.price} />   
                                                             </div>
                                                        </td>
                                                        
                                                    </tr>
                                              )
                                            }
                                                    
                                                  
                                                    </tbody>
                                                    
                                        </table>
                                        <button className='btn-addItem-invoice-create-page'><AddIcon fontSize='small'/>Add Item</button>
                                   </div>
                                   {/* table-- end */}
                                   {/* subtotal start */}
                                   <div className='subtotal-row'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>SubTotal</td>
                                                <td>{invoic.totalMRP}</td>
                                            </tr>
                                            <tr>
                                                <td>Estimated Tax(12%)</td>
                                                <td>452</td>
                                            </tr>
                                            <tr>
                                                <td>Discount</td>
                                                <td>{invoic.couponDiscount}</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping charges</td>
                                                <td>{invoic.shippingPrice}</td>
                                            </tr>
                                            <tr className='total-amount'>
                                                <td>Total Amount</td>
                                                <td>{invoic.subTotal}</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                   </div>
                                   {/* subtotal end */}
                                   {/* payment detail row -start */}
                                     <div className='payment-detail-row'>
                                        <div className='input-wrapper-invoice'>
                                            <h3>Company's Bank Detials</h3>
                                        </div>
                                        <div className='input-wrapper-invoice'>
                                                     <div>
                                                     <p className='label-text-invoice'>A/c Holder Name:</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.companyBankDetail.account}</p>
                                                     </div>
                                        </div>
                                        <div className='input-wrapper-invoice'>
                                                    <div>
                                                     <p className='label-text-invoice'>Bank Name:</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.companyBankDetail.bank}</p>
                                                     </div>
                                        </div>
                                        <div className='input-wrapper-invoice'>
                                                     <div>
                                                     <p className='label-text-invoice'>A/c No:</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.companyBankDetail.accnumber}</p>
                                                     </div>
                                        </div>
                                        <div className='input-wrapper-invoice'>
                                                     <div>
                                                     <p className='label-text-invoice'>Branch & IC Code:</p>
                                                     </div>
                                                     <div className='invoice-detail-block'>
                                                         <p>{invoic.companyBankDetail.branch} & {invoic.companyBankDetail.ifcode}</p>
                                                     </div>
                                        </div>
                                        {/* <h4>Payment Detail</h4>
                                        <p><span>Payment Method:</span>Master card</p>
                                        <p><span>Card Holder:</span>Vishal shakya</p>
                                        <p><span>Card Number:</span>2341-434-3243-324</p>
                                        <p><span>Total Amount:</span>$200</p> */}
                                     </div>
                                   {/* payment detail row -end */}
                                   

                          </div>
                           <div className='invoice-page-footer'>
                                  <div>
                                     <button><PrintIcon fontSize='small' /><span>Save</span></button> 
                                     <button><DownloadIcon fontSize='small'/><span>Send Invoice</span></button> 
                                  </div>
                           </div>
                          {/*  part 2 end */}

                      </div>
                </div>
      
        </div>
   
   </div>}
  
   </>
  )
}



export default CreateInvoice