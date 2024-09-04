import React ,{useEffect,useState} from 'react'
import Sidebar from './main/Sidebar';
import AddIcon from '@mui/icons-material/Add';
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ProductGallaryCard from './subcomponent/ProductGallaryCard';
import { getAdminProduct } from '../../../actions/productActions';
import Loader from './main/Loader';
import { Skeleton } from 'antd';

import '.././mainCss/productGallary.css'

const ProductGallery = () => {

  const dispatch = useDispatch();
  const {loading,products} = useSelector(
    (state)=>state.adminProducts
  )

  useEffect(() => {
    dispatch(getAdminProduct())
  }, [dispatch])
  return (
    <div className='dashboard'>
      <Sidebar/>

        
      <div className='productListContainer'>
      
      <div className='Product-list-header'>
           <div>
             <h3>Product Gallery</h3>
             <ul className='productList-nav-link'>
                 <li><Link to='#'>DashBoard</Link></li>
                 <span>&#8226;</span>
                 <li><Link to='/admin/products'>Product List</Link></li>
                 <span>&#8226;</span>
                 <li><Link to='/admin/product/gallary'>Product Gallery</Link></li>
             </ul>
             
           </div>
           <div>
           <Link to="/create/product">
             <button><AddIcon/>New Product</button>
           </Link>
           </div>
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
       {products && products.map((product)=><ProductGallaryCard product={product}/>)} 
       </div>
       }
            
       </div>
  </div>
       
     
   </div>
  )
}

export default ProductGallery