import React ,{useEffect,useState} from 'react'
import Sidebar from './main/Sidebar';
import AddIcon from '@mui/icons-material/Add';
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getBrands } from '../../../actions/productActions';
import SearchIcon from '@mui/icons-material/Search';
import SellerCard from './subcomponent/SellerCard';

import '.././mainCss/subcomponentCss/sellerCard.css';

const SellerCollection = () => {

  const {brands} = useSelector((state)=>state.productBrands);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBrands());

    
    
  }, [dispatch])
  return (
    <div className='dashboard'>
      <Sidebar active={'Seller'}/>
       
      
        
      <div className='productListContainer'>
      
      <div className='Product-list-header'>
           <div>
             <h3>SELLERS</h3>
             <ul className='productList-nav-link'>
                 <li><Link to='/admin/dashboard'>DashBoard</Link></li>
                 <span>&#8226;</span>
                 <li><Link to='/admin/sellers'>Seller Collection</Link></li>
                 
             </ul>
             
           </div>
           <div>
           <Link to="/admin/new/seller">
             <button><AddIcon/>New Seller</button>
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
       
       <div className='seller-collection'>
        {brands && brands.map((brand)=> <SellerCard brand={brand}/> )}
       <SellerCard/>
       
       </div>
            
       </div>
  </div>
       
     
   </div>
  )
}

export default SellerCollection