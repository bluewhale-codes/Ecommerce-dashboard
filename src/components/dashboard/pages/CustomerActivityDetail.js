import React, { useEffect ,useState } from 'react'
import { useSelector ,useDispatch  } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';
import { Link ,useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { allOrdersAdmin } from '../../../actions/ordersActions';
import Sidebar from './main/Sidebar';
import { Alert } from '@mui/material';
import Loader from './main/Loader';


const CustomerActivityDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {orders,error,loading} = useSelector((state)=>state.adminAllOrders);

  const [alertS, setAlertS] = useState("")
  
  useEffect(() => {
    dispatch(allOrdersAdmin());

    
    
  }, [dispatch,allOrdersAdmin])
  
  

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
  const rows = []
  orders && orders.forEach((item,index) => {
    rows.push({
      id:item._id,
      date:item.createdAt,
      name:item.user,
      amount:item.subTotal,
      status:item.orderStatus,
   
         
    })
});
  return (
   <>
   

   <div className='dashboard'>
      <Sidebar/>
      {loading ? <Loader/> :(
      <div className='productListContainer'>
        {alertS === 'Success' && <Alert severity="error">Order Deleted Successfully !</Alert> }
       
        <div className='Product-list-header'>
            <div>
            <div className='top-header'>
                  <div>
                    <img src='https://themesbrand.com/velzon/html/saas/assets/images/users/avatar-1.jpg'/>
                  </div>
                  <div className='detail'>
                      <p>Vishal shakya</p>
                      <p>Customer</p>
                      <p>India, Chandigarh 160012</p>
                  </div>
              </div>
              <h3>Orders</h3>
              <ul className='productList-nav-link'>
                  <li><Link to='#'>DashBoard</Link></li>
                  <span>&#8226;</span>
                  <li><Link to='/admin/orders'>Orders</Link></li>
                  <span>&#8226;</span>
                  <li><Link to='/admin/orders/details'>order detail</Link></li>
                  
              </ul>
            </div>
            <div>
            
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
      </div>)}
   </div>
   </>
  )
}







export default CustomerActivityDetail