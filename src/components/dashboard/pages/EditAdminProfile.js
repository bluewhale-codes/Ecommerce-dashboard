import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import React ,{useEffect,useState} from 'react'
import Sidebar from './main/Sidebar';
import AddIcon from '@mui/icons-material/Add';
import { useSelector,useDispatch } from 'react-redux'
import { Dialog , Rating ,Button, DialogActions ,DialogContent, DialogTitle} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import SellerCard from './subcomponent/SellerCard';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import BasicInfo from './subcomponent/BasicInfo';
import '.././mainCss/adminProfile.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EditIcon from '@mui/icons-material/Edit';

const EditAdminProfile = () => {
    const [open, setOpen] = useState(false)
    const [dopen, setDopen] = useState(false)
    const [copen, setCopen] = useState(false)
    const [aopen, setAopen] = useState(false)
    const [popen, setPopen] = useState(false)
    const submitReviewToggleb = ()=> {
        open ? setOpen(false) : setOpen(true)
    }
    const submitReviewTogglec = ()=> {
        copen ? setCopen(false) : setCopen(true)
    }
    const submitReviewToggled = ()=> {
        dopen ? setDopen(false) : setDopen(true)
    }
    const submitReviewTogglea = ()=> {
        aopen ? setAopen(false) : setAopen(true)
    }
    const submitReviewTogglep = ()=> {
        popen ? setPopen(false) : setPopen(true)
    }

  return (
    <div className='dashboard admin-profile-template'>
      <Sidebar/>
       
      
        
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
                    <button><AddAPhotoIcon fontSize='small'/></button>
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
                         <div className='Edit-personal-info-header'>
                            <h3>About</h3>
                            <div className='edit-personal-info-btn'>
                                <button onClick={submitReviewToggled}><EditIcon fontSize='small'/>Edit</button>
                                <Dialog aria-labelledby='simple-dialog-title' open={dopen} onClose={submitReviewToggled}>
                                        <DialogTitle>Description</DialogTitle>
                                        <DialogContent className='submitDialog'>
                                            <div className='input-wrapper-admin-personel-info'>
                                                <p className='input-label'>Write About Your Self</p>
                                                <textarea required/>
                                                <textarea/>
                                            </div>
                                            

                                            <DialogActions>
                                                <div className='personel-detail-edit-action'>
                                                 <button>Cancel</button>
                                                 <button>Save</button>
                                                </div>
                                            </DialogActions>
                                        </DialogContent>
                                </Dialog>
                            </div>
                         </div>
                         <p>Hi I'm Anna Adame, It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family.</p>
                         <p>You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you are working with reputable font websites. This may be the most commonly encountered tip I received from the designers I spoke with. They highly encourage that you use different fonts in one design, but do not over-exaggerate and go overboard.</p>
                         <div className='footer-row'>

                         </div>
                   </div>
                </div>
                <div className='personel-detail'>
                    <div className='basic-info-card'>
                    <div className='Edit-personal-info-header'>
                            <h3>Basic Info</h3>
                            <div className='edit-personal-info-btn'>
                                <button onClick={submitReviewToggleb}><EditIcon fontSize='small'/>Edit</button>
                                <Dialog aria-labelledby='simple-dialog-title' open={open} onClose={submitReviewToggleb}>
                                        <DialogTitle>Basic Info</DialogTitle>
                                        <DialogContent className='submitDialog'>
                                            <div className='input-wrapper-admin-personel-info'>
                                                <p className='input-label'>Name</p>
                                                <input type='text' required/>
                                            </div>
                                            <div className='input-wrapper-admin-personel-info'>
                                                <p className='input-label'>Birthday</p>
                                                <input type='date' required/>
                                            </div>
                                            <div className='input-wrapper-admin-personel-info'>
                                                <p className='input-label'>Gender</p>
                                                <input type='text' required/>
                                            </div>
                                           
                                            <DialogActions>
                                                <div className='personel-detail-edit-action'>
                                                 <button>Cancel</button>
                                                 <button>Save</button>
                                                </div>
                                            </DialogActions>
                                        </DialogContent>
                                </Dialog>
                            </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Name:</p>
                        </div>
                        <div className='header-content'>
                            <p>Vishal shakya</p>
                            <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Birthday:</p>
                        </div>
                        <div className='header-content'>
                            <p>May 1 2003</p>
                            <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Gender:</p>
                        </div>
                        <div className='header-content'>
                            <p>Male</p>
                            <ChevronRightIcon/>
                        </div>
                    </div>
                </div>
                <div className='basic-info-card'>
                   <div className='Edit-personal-info-header'>
                            <h3>Contact Info</h3>
                            <div className='edit-personal-info-btn'>
                                <button onClick={submitReviewTogglec}><EditIcon fontSize='small'/>Edit</button>
                                <Dialog aria-labelledby='simple-dialog-title' open={copen} onClose={submitReviewTogglec}>
                                        <DialogTitle>Contact Info</DialogTitle>
                                        <DialogContent className='submitDialog'>
                                            <div className='input-wrapper-admin-personel-info'>
                                                <p className='input-label'>Enter Email</p>
                                                <input type='text' required/>
                                            </div>
                                            <div className='input-wrapper-admin-personel-info'>
                                                <p className='input-label'>Phone</p>
                                                <input type='date' required/>
                                            </div>
                                            
                                           
                                            <DialogActions>
                                                <div className='personel-detail-edit-action'>
                                                 <button>Cancel</button>
                                                 <button>Save</button>
                                                </div>
                                            </DialogActions>
                                        </DialogContent>
                                </Dialog>
                            </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Email:</p>
                        </div>
                        <div className='header-content'>
                            <p>vishalshakya2255@gmail.com</p>
                            <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Phone:</p>
                        </div>
                        <div className='header-content'>
                            <p>9855104673</p>
                            <ChevronRightIcon/>
                        </div>
                    </div>
                    
                </div>
                </div>
                <div className='personel-detail'>
                    <div className='basic-info-card'>
                    <div className='Edit-personal-info-header'>
                            <h3>Address</h3>
                            <div className='edit-personal-info-btn'>
                                <button onClick={submitReviewTogglea} ><EditIcon fontSize='small'/>Edit</button>
                                <Dialog aria-labelledby='simple-dialog-title' open={aopen} onClose={submitReviewTogglea}>
                                        <DialogTitle>Basic Info</DialogTitle>
                                        <DialogContent className='submitDialog'>
                                            <div className='input-wrapper-admin-personel-info'>
                                                <p className='input-label'>Name</p>
                                                <input type='text' required/>
                                            </div>
                                            <div className='input-wrapper-admin-personel-info'>
                                                <p className='input-label'>Birthday</p>
                                                <input type='date' required/>
                                            </div>
                                            <div className='input-wrapper-admin-personel-info'>
                                                <p className='input-label'>Gender</p>
                                                <input type='text' required/>
                                            </div>
                                           
                                            <DialogActions>
                                                <div className='personel-detail-edit-action'>
                                                 <button>Cancel</button>
                                                 <button>Save</button>
                                                </div>
                                            </DialogActions>
                                        </DialogContent>
                                </Dialog>
                            </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>Address</p>
                        </div>
                        <div className='header-content'>
                            <p></p>
                            <ChevronRightIcon/>
                        </div>
                    </div>
                    <div className='card-info-row'>
                        <div className='header-tag'>
                            <p>House no.28 Type 13D PGI campus sector 12 Chandigarh</p>
                        </div>
                        <div className='header-content'>
                            
                        </div>
                    </div>
                    
                </div>
                <div className='basic-info-card'>
                    <div className='Edit-personal-info-header'>
                            <h3>Password</h3>
                            <div className='edit-personal-info-btn'>
                                <button><EditIcon fontSize='small'/>Edit</button>
                                <Dialog aria-labelledby='simple-dialog-title' open={popen} onClose={submitReviewTogglep}>
                                        <DialogTitle>Change Password</DialogTitle>
                                        <DialogContent className='submitDialog'>
                                            <div className='input-wrapper-admin-personel-info'>
                                                <p className='input-label'>Old Password</p>
                                                <input type='password' required/>
                                            </div>
                                            <div className='input-wrapper-admin-personel-info'>
                                                <p className='input-label'>New Password</p>
                                                <input type='password' required/>
                                            </div>
                                            <div className='input-wrapper-admin-personel-info'>
                                                <p className='input-label'>Confirm Passowrd</p>
                                                <input type='password' required/>
                                            </div>
                                           
                                            <DialogActions>
                                                <div className='personel-detail-edit-action'>
                                                 <button>Cancel</button>
                                                 <button>Save</button>
                                                </div>
                                            </DialogActions>
                                        </DialogContent>
                                </Dialog>
                            </div>
                    </div>
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
       
     
   </div>
  )
}



export default EditAdminProfile