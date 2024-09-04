import React from 'react'
import '../../mainCss/subcomponentCss/productGallaryCard.css'
import { Link } from 'react-router-dom';
import { Rating} from '@mui/material';


const ProductGallaryCard = ({product}) => {
  return (
    <Link to={`/admin/product/${product._id}`}>
      <div className='adminProductCard'>
            {product.dpercentage && <div className='discount-icon'>
               <span>{product.dpercentage}% </span>
             </div>}
        <div className='admin-product-image'>
            <img src={product.images[0].url}/>
        </div>
        <div className='admin-productDetail-container'>
             <p className='product-name'>{product.name}</p>
             <div className='product_rating'>
             <Rating  value={4} size='small'/>
             </div>
             
               <div className='product_status'>
                {product.Stock > 0 ?<span>In stock</span>:<span>Out of stock</span>}
               
               </div>
             

        </div>
      </div>
      </Link>
  )
}


export default ProductGallaryCard