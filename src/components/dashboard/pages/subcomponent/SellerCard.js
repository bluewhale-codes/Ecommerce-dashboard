import React from 'react'
import {  Rating} from '@mui/material';
import { useNavigate  , Link} from 'react-router-dom'; 


import '../../mainCss/subcomponentCss/sellerCard.css'
const SellerCard = ({brand}) => {
   const navigate = useNavigate()
  return (
    <div className='seller-card-wrapper' onClick={()=>navigate(`/admin/sellers/detail/${brand._id}`)}>
          <div className='BrandLogo'>
             {brand && 
             <img src={brand.logo.url}/>
             }
          </div>
          <div>
             <p className='brandNameTitle'> <Rating  value={4} size='small'/></p>
             <div className='item-stock-text'>
                <span>{brand && brand.catagory}</span>
                
                
             </div>
          </div>
          <div className='card-footer-btn'>
            
          </div>
    </div>
  )
}

export default SellerCard