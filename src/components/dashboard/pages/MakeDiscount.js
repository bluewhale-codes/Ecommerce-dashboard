import React ,{useEffect,useState} from 'react'
import Sidebar from './main/Sidebar';
import AddIcon from '@mui/icons-material/Add';
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ProductGallaryCard from './subcomponent/ProductGallaryCard';
import { getAdminProduct , getDiscountProduct , createDiscount, clearErrors} from '../../../actions/productActions';
import Loader from './main/Loader';
import { Dialog , Button, DialogActions ,DialogContent, DialogTitle} from '@mui/material';
import { Skeleton } from 'antd';

import '.././mainCss/makeDiscount.css'
import { CREATE_DISCOUNT_RESET } from '../../../constants/productConstants';

const MakeDiscount = ({showAlert}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {loading,dproduct} = useSelector(
    (state)=>state.dproducts
  )
  const {success, error} = useSelector(
    (state)=>state.newDiscount
  )
  
  
  const [open, setOpen] = useState(false)
  const [discount, setDiscount] = useState("")
  const [procuctId, setProductId] = useState("")

  const registerSubmit = (e)=>{
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("sdPrice",discount)
    myForm.set("product",procuctId)
    dispatch(createDiscount(myForm))
  }

  useEffect(() => {
    if(success){
        setOpen(false)
        dispatch({type:CREATE_DISCOUNT_RESET})
        navigate("/admin/products/discount")
        showAlert('Discount Created' , 'success')
    }
    if(error){
       setOpen(false)
       showAlert(error,'error')
       dispatch(clearErrors())
    }
    dispatch(getDiscountProduct())
  }, [dispatch,success])

  const submitCouponToggle = ()=> {
    open ? setOpen(false) : setOpen(true)
  }
  return (
    <div className='dashboard'>
      <Sidebar/>

        
      <div className='productListContainer'>
      
      <div className='Product-list-header'>
           <div>
             <h3>Make Discount for Products</h3>
             <ul className='productList-nav-link'>
                 <li><Link to='#'>DashBoard</Link></li>
                 <span>&#8226;</span>
                 <li><Link to='/admin/products'>Product List</Link></li>
                 <span>&#8226;</span>
                 <li><Link to='/admin/products/discount'>Product Gallery</Link></li>
             </ul>
             
           </div>
           <div>
         
             <button  onClick={submitCouponToggle} ><AddIcon/>New Discount</button>
          
           </div>
            <Dialog aria-labelledby='simple-dialog-title' open={open} >
                <DialogTitle><p className='discount-from-heading'>Create Discount</p></DialogTitle>
                <DialogContent className='submitDialog'>
                    <div>
                    <form onSubmit={registerSubmit} className='create-discont-form'>
                                  <div className='Discount-form-field'>
                                      <p className='input-heading'>Enter a valid product Id</p>
                                      <input required type='text' onChange={(e)=> setProductId(e.target.value)}  placeholder='Product ID'/>
                                  </div>
                                  <div className='Discount-form-field'>
                                      <p className='input-heading'>Set a percentage for Discount</p>
                                      <input required type='number' max='100'  onChange={(e)=> setDiscount(e.target.value)}   placeholder='% OFF'/>
                                  </div>
                                  <div className='Discount-form-field'>
                                      <p className='input-heading'>Set a Expiry data for Discount on product</p>
                                      <input required type='date'/>
                                      <p id='note'>after an expiry data discount on this product will removed</p>
                                  </div>
                                
                                  <button  className='discount-form-btn' type='submit'>
                                      Create
                                  </button>
                            </form>
                    </div>
                              
                </DialogContent>
                <DialogActions>
                  <button className='close-form-btn' onClick={submitCouponToggle}>Cancel</button>
                </DialogActions>
            </Dialog>
      </div>
      <div className="wrap">
                   <div className="search">
                       <input type="text" className="searchTerm" placeholder="Enter Product Id.."/>
                       <button type="submit" className="searchButton">
                           <i className="fa fa-search"><SearchIcon/></i>
                       </button>
                   </div>
              </div>
       <div>
       {loading ? <Skeleton/> : 
       <div className='gallaryProducts'>
       {dproduct && dproduct.map((product)=><ProductGallaryCard product={product}/>)} 
       </div>
       }
            
       </div>
  </div>
       
     
   </div>
  )
}

export default MakeDiscount
