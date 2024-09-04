import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'; 
import '../../mainCss/navbar.css'
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import AccountMenu from '../subcomponent/AccountMenu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const Navbar = () => {
  const navigate = useNavigate();
    const [keyword,setKeyword] = useState("")
    const searchSubmitHandler = (e)=>{
       e.preventDefault();
       if(keyword.trim()){
       navigate(`/products/${keyword}`)
       }else{
      navigate("/products")
       }
    };
  return (
    <>

    <div className="navbar">
  
  <div className='searchBar'>
  
  <form className='searchBox' onSubmit={searchSubmitHandler} >
           <input type="text" placeholder='Search a product ...' onChange={(e)=>setKeyword(e.target.value)}/>
           <button type='submit'>Search</button>
  </form>
  <Link to="/home">Go to Website</Link>
  </div>
  <div className='searchBar'>
  
    <Badge badgeContent={4} color="primary">
      <CircleNotificationsIcon fontSize='large' color="action" />
    </Badge>
  

    <DarkModeIcon fontSize='large'/>
  
  <Link>
        <AccountMenu/>
  </Link>
  </div>
  </div>


      
      </>
  )
}



export default Navbar