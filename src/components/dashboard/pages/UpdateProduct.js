import React, {  useEffect  , useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Sidebar from './main/Sidebar'
import { Link ,useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ReviewCard from './subcomponent/ReviewCard';
import { getProductDetails , updateProduct } from '../../../actions/productActions';
import Loader from './main/Loader';
import DeleteIcon from '@mui/icons-material/Delete';

import '.././mainCss/productDetail.css'
import { UPDATE_PRODUCT_RESET } from '../../../constants/productConstants';

const UpdateProduct = () => {
 const navigate = useNavigate();
  const dispatch = useDispatch();

    const { id } = useParams();
    const {product} = useSelector(
        (state)=>state.productDetails
      )
    const {isUpdated} = useSelector(
        (state)=>state.product
      )

      const [name, setName] = useState("")
      const [price, setPrice] = useState("")
      const [discountPrice, setDiscountPrice] = useState("")
      const [description, setDescription] = useState("")
      const [stock, setStock] = useState(0)
      const [category, setCategory] = useState("")
      const [images, setImages] = useState([])
      const [oldImages,setOldImages] = useState([])
      const [imagesPreview, setImagesPreview] = useState([])


      const categories =[
        "Clothes",
        "Shoose",
        "Accessories",
        "Electronics",
    ]
    const createProductImageChanage = (e) =>{
      const files = Array.from(e.target.files);

      setImages([]);
      setImagesPreview([])
      setOldImages([])
      files.forEach((file)=>{
          const reader = new FileReader();
          reader.onload = () => {
              if(reader.readyState === 2){
                  setImagesPreview((old)=>[...old,reader.result]);
                  setImages((old)=>[...old,reader.result])
              }
          }
          reader.readAsDataURL(file);
      })
   }

   const updateFormSubmitHandler = (e)=>{
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name",name);
    myForm.set("Price",price);
    myForm.set("dPrice",discountPrice)
    myForm.set("description",description);
    myForm.set("catagory",category);
    myForm.set("Stock",stock);
    images.forEach((image)=>{
     myForm.append("images",image)
    })
    dispatch(updateProduct(id,myForm))
};

    
    useEffect(() => {
      if(product && product._id !== id){
         dispatch(getProductDetails(id));
       }else{
        setName(product.name)
        setPrice(product.Price)
        setDiscountPrice(product.dPrice)
        setDescription(product.description)
        setStock(product.Stock)
        setCategory(product.catagory)
        setOldImages(product.images)
       }


       if(isUpdated){
           alert('product updated successfully')
           dispatch({type:UPDATE_PRODUCT_RESET})
       }
   }, [dispatch,navigate,id,product])

  
  return (
    

    
    <div className='dashboard'>
        <Sidebar/>
      
         <div className='productListContainer'>

              <div className="wrap">
                          <div className="search">
                              <input type="text" className="searchTerm" placeholder="Enter Product Id.."/>
                              <button type="submit" className="searchButton">
                                  <i className="fa fa-search"><SearchIcon/></i>
                              </button>
                          </div>
              </div>

              {product &&<div>
                
<div className='Product-list-header'>
     <div>
       <h3>Product Id: {product._id}</h3>
     </div>
     <div>
     <Link to={`/admin/product/Update/${product._id}`}>
       <button>Update product</button>
     </Link>
     </div>
</div>
<form encType='multipart/form-data' onSubmit={updateFormSubmitHandler}>
 <div className='admin-SingleProduct-detail'>
   <div className='SingleProduct-image'>
     <div id='admin-product-img'>
      {images[0] ? <img src={images[0]}/> : <img src={product.images[0].url} /> }
    
      <div className='input-wrapper'>
        <label for='productImage'>Choose image</label>
        <input id='productImage' multiple type='file' name='avatar' onChange={createProductImageChanage} accept='image/*'/>

    </div>
     </div>
     <div>
         <div className='imgDetail-flex-wrapper'>
                   <p className='detail-tag-label'>Product Images</p>
                   <div>
                   {imagesPreview.map((image,index)=>(
                      <div  className='image-Card'>
                        <img key={index} src={image} alt='avatar Preview'/>
                        </div>
                    ))}
                      
                   </div>
           </div>
             
             <div className='detail-flex-wrapper'>
                   <div>
                     
                     <button>Upload</button>
                   </div>
             </div>
            
            
     </div>
      
       
   </div>
   <div className='SingleProduct-Detail'>
        
        <div className='input-wrapper'>
            <p className='detail-tag-label'>Product Name</p>
            <div className='input-wrapper'>
               <input type='text'  name='name' required value={name} onChange={(e)=> setName(e.target.value) } />
              
            </div>
        </div>
        <div className='detail-flex-wrapper'>
             <div>
               <p className='detail-tag-label'>Product MRP</p>
               <div>
                  <input type='number' name='price' placeholder='Original MRP' required value={price} onChange={(e)=> setPrice(e.target.value) } />
                  
               </div>
             </div>
             <div>
               <p className='detail-tag-label'>Discount Price</p>
               <div>
               <input type='number' name='dPrice' placeholder='Original MRP' required value={discountPrice} onChange={(e)=> setDiscountPrice(e.target.value) } />
                  
               </div>
             </div>
        </div>
        
        <div className='input-wrapper'>
            <p className='detail-tag-label'>Product Description</p>
            <div>
               <textarea  placeholder='Product description' value={description} onChange={(e)=> setDescription(e.target.value)} cols="30" rows="1"></textarea>
              
            </div>
        </div>
        
        <div className='detail-flex-wrapper'>
             <div>
               <p className='detail-tag-label'>Catagory</p>
               <div className=' select-input'>
                    <select required onChange={(e)=>setCategory(e.target.value)}>
                          <option value="">Choose Category</option>
                          {categories.map((cate)=>(
                            <option key={cate} value={cate}>{cate}</option>)
                          )}
                    </select>
               </div>
             </div>
             <div>
               <p className='detail-tag-label'>Product Stock</p>
               <div>
               <input type='number' name='Stock' placeholder='Stock' required value={stock} onChange={(e)=> setStock(e.target.value) } />
                   <p  className='value-wrapper'>{product.Stock}</p>
               </div>
             </div>
        </div>
        <div className='detail-flex-wrapper'>
                   <div>
                     <p className='detail-tag-label'>Created At</p>
                     <div>
                         <p className='value-wrapper'>{product.createdAt}</p>
                     </div>
                   </div>
                   <div>
                     <p className='detail-tag-label'>Last update</p>
                     <div>
                         <p className='value-wrapper'>12 Oct,2023</p>
                     </div>
                   </div>
       </div>
       <div className='detail-flex-wrapper'>
                   <div>
                 
                     <button type='submit'>Update</button>
                     
                   </div>
                   <div>
                     
                     <button>Delete</button>
                   </div>
      </div>
        

        

   </div>
 </div>
 </form>


 <div className='admin-product-review-container'>
 <h2>Customer Review</h2>
 {product && product.review.map((rev)=><ReviewCard rev={rev}/>)}
 
 </div>
                
                </div>}


</div>
   </div>

   
  )
}


export default UpdateProduct