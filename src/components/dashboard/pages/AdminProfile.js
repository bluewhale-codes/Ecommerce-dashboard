import React ,{useEffect,useState} from 'react'
import Sidebar from './main/Sidebar';
import AddIcon from '@mui/icons-material/Add';
import { useSelector,useDispatch } from 'react-redux'
import { Link , useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import SellerCard from './subcomponent/SellerCard';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import BasicInfo from './subcomponent/BasicInfo';
import '.././mainCss/adminProfile.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { getStore } from '../../../actions/storeActions';

const AdminProfile = () => {

    const {store} = useSelector((state)=>state.storeInfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStore());
    }, [dispatch])
    

  return (
    <div className='dashboard admin-profile-template'>
      <Sidebar/>
       
      {store && 
        <>
    
       <div className='productListContainer admin-profile-container'>
            <div className='background-cover'>
                <div className='top-header'>
                        <div className='avatar'>
                        <img src='https://themesbrand.com/velzon/html/saas/assets/images/users/avatar-1.jpg'/>
                        </div>
                        <div className='detail'>
                             <h3>Vishal shakya</h3>
                            <p>Owner & admin</p>
                            <div className='location'>
                               <PersonPinCircleIcon fontSize='small'/>
                               <p>Chandigarh, India</p>
                            </div>
                        </div>
                </div>
                <div className='edit-profile-btn'>
                    <button onClick={()=>navigate('/admin/edit/profile')}><DriveFileRenameOutlineIcon fontSize='small'/>Edit Profile</button>
                </div>
            </div>
            <div className='admin-info-cards'>
                {/* <div className='admin-short-info'>
                    <h4>Info</h4>
                    <div className='info-table'>
                        <table className='table'>
                                <tbody>
                                    <tr>
                                        <th>Name:</th>
                                        <td>Vishal shakya</td>
                                    </tr>
                                    <tr>
                                        <th>Mobile:</th>
                                        <td>9855104673</td>
                                    </tr>
                                    <tr>
                                        <th>Location:</th>
                                        <td>Chandigarh</td>
                                    </tr>
                                    <tr>
                                        <th>Email:</th>
                                        <td>vishalshakya2255@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <th>Joining Date:</th>
                                        <td>24th Jan 2023</td>
                                    </tr>
                                </tbody>
                        </table>
                    </div>
                </div> */}
                <div className='admin-description'>
                    <div className='card-body-for-description'>
                         <h3>About</h3>
                         <p>Hi I'm Anna Adame, It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family.</p>
                         <p>You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you are working with reputable font websites. This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard.</p>
                         <div className='footer-row'>

                         </div>
                   </div>
                </div>
                <div className='personel-detail'>
                    <div className='basic-info-card'>
                    <h3>Basic info</h3>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Store Name:</p>
                        </div>
                        <div className='header-content'>
                            <p>{store.name}</p>
                            <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Email:</p>
                        </div>
                        <div className='header-content'>
                            <p>{store.email}</p>
                            <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Location:</p>
                        </div>
                        <div className='header-content'>
                            {store.companyAddress &&
                            <p>{store.companyAddress.city}-{store.companyAddress.pinCode}</p>
                            }
                            <ChevronRightIcon/>
                        </div>
                    </div>
                </div>
                {store.companyAddress && <div className='basic-info-card'>
                    <h3>Company Address info</h3>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Address:</p>
                        </div>
                        <div className='header-content'>
                            <p>{store.companyAddress.address}</p>
                            <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Phone:</p>
                        </div>
                        <div className='header-content'>
                        <p>{store.companyAddress.phoneNo}</p>
                            <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>City/State:</p>
                        </div>
                        <div className='header-content'>
                        <p>{store.companyAddress.state}</p>
                            <ChevronRightIcon/>
                        </div>
                    </div>
                    
                </div>}
                </div>

                <div className='personel-detail'>
                    {store.companyBankDetail && <div className='basic-info-card'>
                    <h3>Bank Details</h3>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Acc/Holder</p>
                        </div>
                        <div className='header-content'>
                            <p>{store.companyBankDetail.account}</p>
                            <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Bank Name</p>
                        </div>
                        <div className='header-content'>
                        <p>{store.companyBankDetail.bank}</p>
                        </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Acc Number</p>
                        </div>
                        <div className='header-content'>
                        <p>{store.companyBankDetail.accnumber}</p>
                        </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Branch</p>
                        </div>
                        <div className='header-content'>
                        <p>{store.companyBankDetail.branch}</p>
                        </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>IFC code</p>
                        </div>
                        <div className='header-content'>
                        <p>{store.companyBankDetail.ifcode}</p>
                        </div>
                    </div>
                    
                </div>}
                <div className='basic-info-card'>
                    <h3>Password</h3>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Password:</p>
                        </div>
                        <div className='header-content'>
                            <p>vishalshakya43658</p>
                            <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Last Change:</p>
                        </div>
                        <div className='header-content'>
                            <p>24 August</p>
                            <ChevronRightIcon/>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>

            

      
       </div>
       
     </>
     }
   </div>
  )
}


export default AdminProfile