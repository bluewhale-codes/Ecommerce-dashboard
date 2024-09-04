import React, { useDebugValue, useEffect  , useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {Rating} from '@mui/material';
import { LinearProgress } from '@mui/material';
import Sidebar from './main/Sidebar';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import { Link ,useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Loader from './main/Loader';
import '.././mainCss/sellerDetail.css'
import { getBrandDetails } from '../../../actions/productActions';
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
import {Line} from 'react-chartjs-2'
import { getBrandProduct } from '../../../actions/productActions';


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


const SellerDetail = () => {

    const dispatch = useDispatch();
    let {id} = useParams()
   const {loading ,brandProducts:products} = useSelector((state)=>state.adminProducts);
   const {brand } = useSelector((state)=>state.productBrands)


    useEffect(() => {
        dispatch(getBrandProduct(id));
        dispatch(getBrandDetails(id));



      }, [dispatch,id])

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',"August","september",'Oct',"Nov","Dec"];

    const data3 = {
        labels,
        datasets: [
          {
            fill: true,
            label: 'Earning',
            data:[2,43,332,66,75,332,673,77,123,78,65,342],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)'
          }


        ],
      };


      const columns = [
        {field:"image",headerName:"Image",type:"image" ,renderCell: (params) => <img src={params.value} />},
        {field:"id",headerName:"Product ID" ,flex:0.5},
        {field:"catagory",headerName:"Product Catagory" ,flex:0.5},
        {field:"name",headerName:"Name" ,flex:1},
        {field:"stock",headerName:"Stock" ,type:"number",flex:0.3},
        {field:"price",headerName:"Price" ,type:"number", flex:0.5},
        {field:"action",headerName:"Actions" ,type:"number",sortable:false,flex:0.3 ,sortable:false,renderCell:(params)=>{
          return (
            <>
              <Link to={`/hello`}>edit</Link>
              <button>delete</button>
            </>
          )
      }},

      ]
      const rows = []
      products && products.forEach((item,index) => {
        rows.push({
            image:item.images[0].url,
            id:item._id,
            stock:item.Stock,
            price:item.Price,
            name:item.name,
            catagory:item.catagory,

        })
    });

  return (


    <div className='dashboard'>
        <Sidebar/>



         <div className='productListContainer brand-detail-container'>

         <div className='Product-list-header'>
            <div>
              <h3>SELLER DETAIL</h3>
              <ul className='productList-nav-link'>
                  <li><Link to='#'>DashBoard</Link></li>
                  <span>&#8226;</span>
                  <li><Link to='/admin/product'>Seller gallary</Link></li>
                  <span>&#8226;</span>
                  <li><Link to='/admin/product/gallary'>Seller detail</Link></li>
              </ul>
            </div>
            <div>
            <Link to="/create/product">
              <button><AddIcon/>Add new</button>
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

              <div className='brand-collection-container'>
                    <div className='brand-collection-containerFlex1'>
                        <div className='seller-info-details'>
                            <div className='seller-logo'>
                                {brand && 
                                <img src={brand.logo.url}/>
                                }
                            </div>

                            {brand && <div className='seller-details'>
                              <p><span>Owner Name</span><span>Vishal shakya</span></p>
                              <p><span>Company Type</span><span>{brand.catagory}</span></p>
                              <p><span>Email</span><span>vishalshakya2255@gmail.com</span></p>
                              <p><span>Website</span><span>www.vishalsoi.com</span></p>
                              <p><span>Contact No.</span><span>+91 9855104673</span></p>
                              <p><span>Location</span><span>India</span></p>
                            </div>}
                        </div>
                        <div className='seller-detailCharts'>
                                    <div className='header'>
                                    <div>
                                        <p>Revenue</p>
                                    </div>
                                    <div className='sort-icons'>
                                        <span>ALL</span>
                                        <span>1M</span>
                                        <span>6M</span>
                                        <span>1Y</span>
                                    </div>
                                    </div>
                                    <div className='revenue-chart'>
                                    <Line data={data3} />
                                    </div>
                        </div>
                    </div>














                    {/*  second container */}

                    <div className='brand-collection-containerFlex1'>


                        <div className='seller-product-review'>
                              <div className='header'>
                                 <p>Customer Review</p>
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
                              <div className='product-reviews'>

                                {/* product review */}

                                        <p className='header'>Product Review</p>
                                        <div  className='reviews-brandDetail-page'>
                                            {/* card 1 */}
                                            <div className='review-card-BrandInfo'>
                                                <div className='card-content'>
                                                    <div className='card-image'>
                                                        <img src='https://themesbrand.com/velzon/html/saas/assets/images/products/img-1.png'/>
                                                    </div>
                                                    <div>
                                                        <p>
                                                            "message hello world this is vishal shaka"
                                                        </p>
                                                        <div>
                                                        <Rating  value={4} size='small'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className='card-footer'>-by vishal shakya</p>
                                            </div>
                                            <div className='review-card-BrandInfo'>
                                                <div className='card-content'>
                                                    <div className='card-image'>
                                                        <img src='https://themesbrand.com/velzon/html/saas/assets/images/products/img-1.png'/>
                                                    </div>
                                                    <div>
                                                        <p>
                                                            message hello world this is vishal shaka
                                                        </p>
                                                        <div>
                                                        <Rating  value={4} size='small'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className='card-footer'>-by vishal shakya</p>
                                            </div>
                                            <div className='review-card-BrandInfo'>
                                                <div className='card-content'>
                                                    <div className='card-image'>
                                                        <img src='https://themesbrand.com/velzon/html/saas/assets/images/products/img-1.png'/>
                                                    </div>
                                                    <div>
                                                        <p>
                                                            message hello world this is vishal shaka
                                                        </p>
                                                        <div>
                                                        <Rating  value={4} size='small'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className='card-footer'>-by vishal shakya</p>
                                            </div>
                                            {/* card one */}

                                        </div>

                              </div>
                        </div>
                        <div className='seller-products-list'>
                               <div className='seller-product-List-header'>
                                   <div>
                                      <button>Add new</button>
                                   </div>
                                   <div>
                                       <input type='search'/>
                                    </div>
                               </div>
                               <div className='product-List'>
                               <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                        paginationModel: { page: 0, pageSize: 13 },
                                        },
                                    }}
                                    pageSizeOptions={[13, 50]}

                                    disableRowSelectionOnClick
                                    className='productListTable'
                                    autoHeight
                                    />
                               </div>
                        </div>

                    </div>


              </div>


</div>
   </div>
  )
}




export default SellerDetail