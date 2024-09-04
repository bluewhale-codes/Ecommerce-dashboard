import React ,{useEffect,useState} from 'react'
import Sidebar from './main/Sidebar';
import { useSelector ,useDispatch } from 'react-redux'
import {Link , useNavigate} from "react-router-dom"
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { getAdminProduct } from '../../../actions/productActions';
import { DELETE_PRODUCT_RESET } from '../../../constants/productConstants';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProduct } from '../../../actions/productActions';
import { getAllInvoice } from '../../../actions/ordersActions';
import PreviewIcon from '@mui/icons-material/Preview';
import '.././mainCss/dashboard.css'
import '.././mainCss/invoice.css'




const Invoice = () => {
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {error,products} = useSelector((state)=>state.adminProducts);
  const {isDeleted , loading} = useSelector((state)=>state.product);
  const {invoices} = useSelector((state)=>state.newInvoice);

  const [alertS, setAlertS] = useState("")
  const [navComponent, setNavComponent] = useState("PRODUCTLIST")

  
  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllInvoice());
    if(isDeleted){
      setAlertS("Success")
      dispatch({type:DELETE_PRODUCT_RESET})
    }
    
  }, [dispatch , isDeleted , setAlertS ])
  
  const deleteProductHandler = (id) => {
     dispatch(deleteProduct(id));
  }
  


    const columns = [
        {field:"id",headerName:"Invoice no." , minWidth:250,flex:0.5},
        {field:"userid",headerName:"user ID" , minWidth:200,flex:0.5},
        {field:"orderid",headerName:"Order ID" , minWidth:200,flex:1},
        {field:"mrp",headerName:"Total MRP" ,type:"number", minWidth:150,flex:0.3},
        {field:"total",headerName:"SubTotal" ,type:"number", minWidth:270,flex:0.5},
        {field:"action",headerName:"View Details" ,type:"number",sortable:false, minWidth:250,flex:0.3 ,sortable:false,renderCell:(params)=>{
          return (
            <>
             <Link to={`/admin/invoice/create/${params.row.orderid}`}><PreviewIcon/></Link>
             
            </>
          )
      }},
    
      ]
      const rows = []
      invoices && invoices.forEach((item,index) => {
        rows.push({
            id:item._id,
            userid:item.user,
            orderid:item.order,
            mrp:item.totalMRP,
            total:item.subTotal,
            catagory:item.catagory,
             
        })
    });

  

  return (
    <div className='dashboard'>
    <Sidebar active={'Invoice'}/>
    <div className='dashboardContainer'>
      
       <div className='dashboard-header'>
           <div className='header-container'>
               <p>INVOICE SEND</p>
               <p className='count-tag'>76</p>
               <div>
                  <p className='footer-tag'><span>566</span>Invoices sent</p>
                  <span className='icon-invoice'><TextSnippetIcon fontSize='small'/></span>
               </div>
           </div>
           <div className='header-container'>
               <p>PAID INVOICE</p>
               <p className='count-tag'>31</p>
               <div>
                  <p className='footer-tag'><span>333</span>Paid by client</p>
                  <span className='icon-invoice'><AssignmentTurnedInIcon fontSize='small'/></span>
               </div>
           </div>
           <div className='header-container'>
              <p>UNPAID INVOICE</p>
               <p className='count-tag'>544</p>
               <div>
                  <p className='footer-tag'><span>332</span>Unpaid by client</p>
                  <span className='icon-invoice'><AccessTimeFilledIcon fontSize='small'/></span>
               
               </div>
           </div>
           <div className='header-container'>
              <p>CANCELLED INVOICE</p>
               <p className='count-tag'>45</p>
               <div>
                  <p className='footer-tag'><span>563</span>Cancelled by client</p>
                  <span className='icon-invoice'><CancelIcon fontSize='small'/></span>
               
               </div>
           </div>
       </div>



      <div className='invoice-list-table'>
        <div className='invoice-list-header'>
                <div className='invoice-tag'>
                    <p>Invoice</p>
                </div>
                <div>
                   <button onClick={()=>{navigate('/admin/invoice/create')}}><AddIcon fontSize='small'/><span>Create Invoice</span></button>
                </div>
        </div>
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
  )
}


export default Invoice