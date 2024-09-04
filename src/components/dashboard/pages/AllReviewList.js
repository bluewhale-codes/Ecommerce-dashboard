import React, { useEffect ,useState } from 'react'
import { useSelector ,useDispatch  } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getAdminProduct ,deleteProduct } from '../../../actions/productActions';
import Sidebar from './main/Sidebar';
import { Alert } from '@mui/material';
import { DELETE_PRODUCT_RESET } from '../../../constants/productConstants';
import AddIcon from '@mui/icons-material/Add';
import Loader from './main/Loader';
import PreviewIcon from '@mui/icons-material/Preview';

import '.././mainCss/productList.css'

const AllReviewList = () => {
  const dispatch = useDispatch();
  const {error,products} = useSelector((state)=>state.adminProducts);
  const {isDeleted , loading} = useSelector((state)=>state.product);

  const [alertS, setAlertS] = useState("")
  const [navComponent, setNavComponent] = useState("PRODUCTLIST")

  
  useEffect(() => {
    dispatch(getAdminProduct());

    if(isDeleted){
      setAlertS("Success")
      dispatch({type:DELETE_PRODUCT_RESET})
    }
    
  }, [dispatch , isDeleted , setAlertS ])
  
  const deleteProductHandler = (id) => {
     dispatch(deleteProduct(id));
  }
  

  const columns = [
    {field:"image",headerName:"Image",type:"image" ,renderCell: (params) => <img src={params.value} />},
    {field:"id",headerName:"Product ID" , minWidth:250,flex:0.5},
    {field:"catagory",headerName:"Product Catagory" , minWidth:200,flex:0.5},
    {field:"name",headerName:"Name" , minWidth:200,flex:1},
    {field:"stock",headerName:"Stock" ,type:"number", minWidth:150,flex:0.3},
    {field:"price",headerName:"Price" ,type:"number", minWidth:270,flex:0.5},
    {field:"action",headerName:"Actions" ,type:"number",sortable:false, minWidth:250,flex:0.3 ,sortable:false,renderCell:(params)=>{
      return (
        <>
         <Link to={`/admin/product/reviews/${params.row.id}`}>
          <PreviewIcon/>
         </Link>
          <Button onClick={()=>deleteProductHandler(params.row.id)}>
             <DeleteIcon/>
          </Button>
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
   <>
   {loading ? <Loader/> :(
       
   <div className='dashboard'>
      <Sidebar active={'Reviews'}/>
       {navComponent === 'PRODUCTLIST' && <div className='productListContainer'>
        {alertS === 'Success' && <Alert severity="error">Product Deleted Successfully !</Alert> }
       <div className='Product-list-header'>
            <div>
              <h3>Review List</h3>
              <ul className='productList-nav-link'>
                  <li><Link to='#'>DashBoard</Link></li>
                  <span>&#8226;</span>
                  <li><Link to='/admin/products'>Product List</Link></li>
                  <span>&#8226;</span>
                  <li><Link to='/admin/product/reviews'>Product Review</Link></li>
              </ul>
            </div>
            <div>
            <Link to="/admin/new/product">
              <button><AddIcon/>New Product</button>
            </Link>
            </div>
       </div>
        <div >
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
   </div>}
   
   </div>
  )} 
   </>
  )
}



export default AllReviewList