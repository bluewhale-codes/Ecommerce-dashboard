import React, { useEffect ,useState } from 'react'
import { useSelector ,useDispatch  } from 'react-redux'
import { DataGrid } from '@mui/x-data-grid';
import { Link , useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getAllUser } from '../../../actions/userActions';
import Sidebar from './main/Sidebar';
import { Alert } from '@mui/material';
import Loader from './main/Loader';

import '.././mainCss/dashboard.css'


const AllAdminUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {users} = useSelector((state)=>state.allUser);
  // const {isDeleted , loading} = useSelector((state)=>state.product);

  const [alertS, setAlertS] = useState("")
  
  useEffect(() => {
    dispatch(getAllUser());

    // if(isDeleted){
    //   setAlertS("Success")
    //   dispatch({type:})
    // }
    
  }, [dispatch])
  
//   const deleteOrderHandler = (id) => {
//      dispatch(deleteuser(id));
//   }
  

  const columns = [
    {field:"image",headerName:"Image",type:"image" ,renderCell: (params) => <img src={params.value} />},
    {field:"id",headerName:"User ID" , minWidth:200,flex:0.5},
    {field:"email",headerName:"Email" , minWidth:350,flex:1},
    {field:"name",headerName:"Name" ,type:"number", minWidth:150,flex:0.3},
    {field:"role",headerName:"Role" ,type:"number", minWidth:270,flex:0.5 , cellClassName:(params)=>{
      return params.row.role === "admin" ? 'greenColor':'redColor';
   }},
    {field:"action",headerName:"Actions" ,type:"number",sortable:false, minWidth:150,flex:0.3 ,sortable:false,renderCell:(params)=>{
      return (
        <>
          <Link to={`/admin/customer/${params.row.id}`}><EditIcon/></Link>
          <Button>
             <DeleteIcon/>
          </Button>
        </>
      )
  }},

  ]
  const rows = []
  users && users.forEach((item,index) => {
    rows.push({
        image:item.avatar.url,
        id:item._id,
        email:item.email,
        name:item.name,
        role:item.role,
         
    })
});
  return (
   <>
   <div className='dashboard'>
      <Sidebar active={'Users'}/>
      <div className='productListContainer'>
        {alertS === 'Success' && <Alert severity="error">Product Deleted Successfully !</Alert> }
       <div className='Product-list-header'>
            <div>
              <h3>Customer</h3>
              <ul className='productList-nav-link'>
                  <li><Link to='/admin/dashboard'>DashBoard</Link></li>
                  <span>&#8226;</span>
                  <li><Link to='/admin/customers'>Customer List</Link></li>
                  
              </ul>
            </div>
            <div>
            <Link to="/admin/new/customer">
              <button>New User</button>
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
   </div>
   
   </div>
   

   {/* <div className='dashboard'>
      <Sidebar/>
      <div className='productListContainer'>
        {alertS === 'Success' && <Alert severity="error">User Deleted Successfully !</Alert> }
       
        <h1 id='productListHeading'>All Users</h1>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableRowSelectionOnClick
          className='productListTable'
          autoHeight 
        />
      </div>
   </div> */}
   </>
  )
}





export default AllAdminUsers