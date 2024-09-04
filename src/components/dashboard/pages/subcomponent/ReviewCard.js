import React from 'react'
import {Rating} from '@mui/material';
import '../../mainCss/subcomponentCss/reviewCard.css'
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const ReviewCard = ({rev}) => {

    const [more, setMore] = useState(false);
    const seeMoreToggle = ()=> {
        more ? setMore(false) : setMore(true)
     }
   
  return (
    <div className='reviewCard'>
        
        <div className='headerImg'>
             <div className='Image'><img src='https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX460_.png' alt=''/></div>
             <p>{rev.name}</p>
        </div>
        <Rating value={4} size='small'/>
        <p className='review-date'><span>Posted on:</span> 2 Aug,2023</p>
        
        <div className='comment'>

            <p>
            {more ? <>{rev.comment}</>:<>{rev.comment.substring(0, 200)}</>}{rev.comment.length > 200 && <span onClick={seeMoreToggle} className='readmore-tag'>{more ? <p><KeyboardArrowUpIcon/>Read less</p>:<p><KeyboardArrowDownIcon/>Read more</p>}</span> }
            </p>
        </div>
    </div>
  )
}

export default ReviewCard