import React, { useEffect ,useState } from 'react'
import { useSelector ,useDispatch  } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';
import { Link ,useNavigate , useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { allOrdersAdmin } from '../../../actions/ordersActions';
import { getProductDetails } from '../../../actions/productActions';
import Sidebar from './main/Sidebar';
import { Alert } from '@mui/material';
import Loader from './main/Loader';
import {Rating} from '@mui/material';
import { LinearProgress } from '@mui/material';
import ReviewCard from './subcomponent/ReviewCard';
import SearchIcon from '@mui/icons-material/Search';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';


import '.././mainCss/sellerDetail.css'
import '.././mainCss/productReviews.css'
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);




const  ProductReviews = () => {

  const doughnutState = {
    labels:["1 Star" , "2 Start" ,"3 Star" ,"4Star" ,"5 Star"],
    datasets:[
        {
            label:"TOTAL AMOUNT",
            backgroundColor:["rgb(5 142 247 / 33%)","rgba(64, 239, 78, 0.264)","rgba(255, 87, 51)","rgba(142, 68, 173 )","rgba(247, 220, 111)"],
            hoverBackgroundColor:['rgb(5 142 247 / 83%);',"rgb(64 239 78 / 62%)"],
            data:[22,44,66,77,88]
        }
    ]
  };


  const rev = {
        user: "64ddea1684035cec0cac726b",
        name: "vishal shakya",
        rating: 3,
        comment: "Wow. I think you cannot find something similar to compare with this monitor in this price range. I got this for 7k something. Honestly I like the build quality and the display is also great but not the best. Actually you are getting much more than what you have paid. It was so easy to setup, plug and play ready. Delivered on time and without any damages. Thanks to the seller, MSI, and Amazon. I could never find something like this at 7k in local or other online store. I wish to give 5 star but the resolution is not that great.",
        _id: "64ef1b0cb9d0418949850157"
    }
    
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const { id } = useParams();
    const {loading , product} = useSelector(
        (state)=>state.productDetails
      )

      useEffect(() => {
      
        dispatch(getProductDetails(id))
  
     }, [dispatch,id]);
  
  

  const columns = [
    {field:'id',headerName:'Order ID',minWidth:300,flex:1,},
    {field:'date',headerName:'Date',flex:1,},
    {field:'name',headerName:'Customer ID',flex:1,},
    {field:'amount',headerName:'Amount',type:"number"},
    {field:'status',headerName:'Status',minWidth:150 ,flex:0.5,renderCell:(params)=>{
      return params.row.status === "Delivered" ? <span id='productStatusRed'>{params.value}</span  >:<span id='productStatusGreen'>{params.value}</span>;
      
    },cellClassName:(params)=>{
        return params.row.status === "Delivered" ? 'redColor':'greenColor';
     } },
    {field:'actions',headerName:'Actions',type:"number",sortable:false,renderCell:(params)=>{
        return (
          <>
           
            <Button>
              
            </Button>
            <Button>
            <EditIcon/>
            </Button>
            
          </>
            
        )
    }},

  ]
 
  return (
   <>
   

   <div className='dashboard'>
      <Sidebar/>
      {loading ? <Loader/> :(
      <div className='productListContainer productReviewContainer'>
            <div className="wrap">
                   <div className="search">
                       <input type="text" className="searchTerm" placeholder="Find Reviews by Product Id.."/>
                       <button type="submit" className="searchButton">
                           <i className="fa fa-search"><SearchIcon/></i>
                       </button>
                   </div>
            </div>
       

            <div className='top-header'>
                              {product &&
                                <>
                            <div>
                                <img src={product.images[0].url}/>
                            </div>
                            <div className='detail'>
                              <p>{product.name}</p>
                                <p>{product.catagory}</p>
                                <p>#{product._id}</p>
                                
                            </div>
                            </>
                                }
            </div>
       
            <div className='product-review-container-flex'>
                  <div className='product-review-container-flex1'>
                        

                        <div className='review-summery-content'>
                        

                                        {/* Review start */}
                                        
                                        <div className='seller-product-review product-reviewAdmin-page'> 
                                            <div className='header'>
                                                <p>Customer Review</p>
                                            </div>
                                            <div className='Doughnut-chart'>
                                            <Doughnut data={doughnutState}/>
                                             </div>
                                            <div className='Seller-rating'>
                                                <div>
                                                    <Rating  value={4} size='small'/>
                                                </div>
                                                <div>
                                                    <p>4.5 of 5</p>
                                                </div>
                                                
                                            </div>
                                            <div className='Seller-reviews-numbers'>
                                                <div className='star-rating'>
                                                    <span>5 Start</span>
                                                    <div>
                                                    <LinearProgress variant="determinate" value={87} />
                                                    </div>
                                                    <span>456</span>
                                                </div>
                                                <div className='star-rating'>
                                                    <span>4 Star</span>
                                                    <div>
                                                    <LinearProgress variant="determinate" value={5} />
                                                    </div>
                                                    <span>778</span>
                                                </div>
                                                <div className='star-rating'>
                                                    <span>3 Star</span>
                                                    <div>
                                                    <LinearProgress variant="determinate" value={34} />
                                                    </div>
                                                    <span>675</span>
                                                </div>
                                                <div className='star-rating'>
                                                    <span>2 Star</span>
                                                    <div>
                                                    <LinearProgress variant="determinate" value={43} />
                                                    </div>
                                                    <span>42</span>
                                                </div>
                                                <div className='star-rating'>
                                                    
                                                    <span>1 Star</span>
                                                    <div>
                                                    <LinearProgress variant="determinate" value={76} />
                                                    </div>
                                                    <span>55</span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                        {/* review end */}
                        </div>
                  </div>

                  <div className='product-review-container-flex2'>

                     <div className='header'>
                        <h3>Reviews</h3>
                     </div>
                     <div className='product-all-reviews-List'>

                      {product && product.numOfReviews!=0 ? 
                     <> {product && product.review.map((rev)=><ReviewCard rev={rev}/>)}</>
                      :  <div>
                            <p>No review Available on this product</p>
                         </div>

                    }
                         
                     </div>

                  </div>
            </div>
                


      </div>)}
   </div>
   </>
  )
}





export default ProductReviews