import React ,{useEffect} from 'react'
import Sidebar from './main/Sidebar';
import { useSelector ,useDispatch } from 'react-redux'
import {Link} from "react-router-dom"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import { todayOrders } from '../../../actions/ordersActions';
import { getAdminProduct } from '../../../actions/productActions';
import { getBrands } from '../../../actions/productActions';
import { getDashboardInfo } from '../../../actions/storeActions';
import PreviewIcon from '@mui/icons-material/Preview';
import '.././mainCss/dashboard.css'

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

import { Doughnut , Line ,Bar } from 'react-chartjs-2'
import SellIcon from '@mui/icons-material/Sell';

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

const Dashboard = () => {
   
  const dispatch = useDispatch()
  const {orders} = useSelector((state)=>state.adminAllOrders);
  const {store} = useSelector((state)=>state.storeInfo);
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July',"August","september",'Oct',"Nov","Dec"];
  
  const data2 = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'customers',
        data:[22,56,75,78,23,66,990,23,223,567,324,546],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      
    ],
  };
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
  const data = {
    labels,
    datasets: [
      {
        label: 'Orders',
        data: [456,764,34,865,12,88,341,764,564,222,897,334],
        backgroundColor: 'rgb(5, 142, 247)',
      },
      {
        label: 'cancel order',
        data: [22,33,66,77,99,12,4,36,67,809,43,25],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const activeLink = 'Dashboard'
  
  useEffect(() => {
    dispatch(todayOrders());
    dispatch(getDashboardInfo());
  }, [dispatch])

  
  
  

  return (

    <div className='dashboard'>
    <Sidebar active={activeLink}/>
    <div className='dashboardContainer'>
      <div className='greeting-header'>
        <p><b>Good Morning, Anna!</b></p>
         <p>Here's what's happening with your store today.</p>
      </div>
       {store && <div className='dashboard-header'>
           <div className='header-container'>
               <p>Products</p>
               <p className='count-tag'>{store.productCount}</p>
               <div>
                  <span></span>
                  <span className='icon'><InventoryIcon fontSize='medium'/></span>
               </div>
           </div>
           <div className='header-container'>
               <p>orders</p>
               <p className='count-tag'>{store.orders}</p>
               <div>
                  <span></span>
                  <span className='icon'><LocalMallIcon fontSize='medium'/></span>
               </div>
           </div>
           <div className='header-container'>
              <p>Customers</p>
               <p className='count-tag'>{store.customerCount}</p>
               <div>
                  <span></span>
                  <span className='icon'><PeopleIcon fontSize='medium'/></span>
               
               </div>
           </div>
           <div className='header-container'>
              <p>Sellers</p>
               <p className='count-tag'>{store.brandsCount}</p>
               <div>
                  <span></span>
                  <span className='icon'><SellIcon fontSize='medium'/></span>
               
               </div>
           </div>
       </div>}

      <div className='Revenue-model-table-wrapper'>
           <div className='Revenue-model-table'>
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
           <div className='order_new-admin_dashboard'>
            
              <div className='dashboard_newOrders_headers'>
                    <div>
                        <p>Todays Orders</p>
                    </div>
                    <div className='header-button'>
                      <Link>
                        View Order List
                      </Link>
                    </div>
              </div>
              <div className='newOrder-table'>
              <table className='dashboard_adminorderTable'>
                     <thead>
                      <tr className='dashboard_table-header'>
                          <th className='dashboard_product-detailHeader'>Order Id</th>
                          <th>Location</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>View</th>
                      </tr>
                      </thead>
                     
                     <tbody>
                     {orders && orders.map((item)=>
                       
                    <tr>
                         <td>
                            <p>{item.createdAt}</p>
                         </td>
                         
                         
                         <td><p>{item.shippingInfo.city},{item.shippingInfo.pinCode}</p></td>
                         <td><span>₹{item.subTotal}</span></td>
                         <td><span className='processing'>{item.orderStatus}</span></td>
                         <td><span><Link to={`/admin/orders/details/${item._id}`}><PreviewIcon/></Link></span></td>
                        
                     </tr>          
                     )}
                      
                      
                              
                      </tbody>                    
                  </table>
              </div>
            
           </div>
      </div>

       
      <div className='newOrders-table-container'>
          

         
      </div>

        <div className='bar-line-charts'>
          <div>
              <div className='chart-header'>
                <div>
                  <p>Orders</p>
                </div>
                <div>
                    <p>Sort By:</p><span></span>
                </div>
              </div>
             <Bar data={data} />
          </div>

          <div>
              <div className='chart-header'>
                <div>
                  <p>Customers</p>
                </div>
                <div>
                    <p>Sort By:</p><span></span>
                </div>
              </div>
           <Line data={data2} />
          </div>
          
        </div>
       
    </div>
</div>
  )
}

export default Dashboard
