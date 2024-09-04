import React ,{useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'; 
import { useDispatch,useSelector } from 'react-redux'
import { newProduct , clearErrors } from '../../../actions/productActions';
import Loader from './main/Loader';
import Sidebar from './main/Sidebar';
import { NEW_PRODUCT_RESET } from '../../../constants/productConstants';
import { getAllBrand } from '../../../actions/productActions';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import {addOptions,removeOptions } from '../../../actions/productActions';
import ClearIcon from '@mui/icons-material/Clear';
import { Dialog , DialogActions ,DialogContent, DialogTitle} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { LOCAL_RESET } from '../../../constants/productConstants';
import { InputError } from '../../FormComponents/Input';

// FORM INPUTS START
import { Input } from '../../FormComponents/Input';
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  desc_validation,
  status_validation,
  ptype_validation,
   catagory_validation,
} from '../../../utils/InputValidations'
import VariantForm from '../../FormComponents/VariantForm';
// FORM INPUT END


import '.././mainCss/newProduct.css'
import '.././mainCss/newProductForm.css'



const NewProducts = () => {
    const {loading , error } = useSelector((state)=>state.newProduct)
    const [success, setSuccess] = useState(false)
    const {options,variantInfo} = useSelector((state)=>state.variant)


    const methods = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const [vopen, setVopen] = useState(false)
    const [tag,setTag] = useState()
    const [errror ,setError] =useState(false)
    const [optionError,SetOptionError] = useState(false)
    const [option , setOption] = useState("")
    const [optionName , setOptionName] = useState("")
    const [optionValue , setOptionValue] = useState([])
    const [pTags,setPtags] = useState([]);

    
    

    useEffect(() => {
       
        if(success){
            localStorage.removeItem("productOptions")
            localStorage.removeItem("productVariant")
            navigate('/admin/products')
            dispatch({type:LOCAL_RESET})
            dispatch({type:NEW_PRODUCT_RESET})
        }
        dispatch(getAllBrand());
     }, [dispatch,navigate,success])
     
    
    const addOptionHandler= async(e) => {
        e.preventDefault();
        if(option!==null && optionValue.length!==0){
            dispatch(addOptions({option,optionValue}));
            setOptionValue([]);
            submitReviewToggleb();
        }else{
            SetOptionError(true)
        }
    }
    const removeOptionHandler= async(id) => {
        dispatch(removeOptions(id));
    }

    const addValueHandler = (e) =>{
        e.preventDefault()
        setOptionValue([
            ...optionValue,
            {value:optionName}
          ]);
          setOptionName('')
    }
    const addProductTagHandler = (e) =>{
        e.preventDefault();
        setPtags([
            ...pTags,
            {Tag:tag}
          ]);
          setTag('');
    }
    const submitReviewToggleb = ()=> {
        open ? setOpen(false) : setOpen(true)
    }
    const createVariantToggle = ()=> {
        vopen ? setVopen(false) : setVopen(true)
    }



    const onSubmit = methods.handleSubmit(data => {
        if(option.length !== 0 && variantInfo.length !== 0){
            const myForm = new FormData();
            myForm.set("title",data.name);
            myForm.set("description",data.description);
            myForm.set("catagory",data.catagory);
            myForm.set("productType",data.type);
            myForm.set("status",data.status);   
            myForm.append("productTag",JSON.stringify(pTags))
            myForm.append("variantType",JSON.stringify(options))
            myForm.append("variant",JSON.stringify(variantInfo))
            methods.reset()
            dispatch(newProduct(myForm))
            setError(false)
            setSuccess(true)
        }else{
            setError(true);
        }
    })
  

 
     
    //  const createProductImageChanage = (e) =>{
    //     const files = Array.from(e.target.files);

    //     setImages([]);
    //     setImagesPreview([])
    //     files.forEach((file)=>{
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //             if(reader.readyState === 2){
    //                 setImagesPreview((old)=>[...old,reader.result]);
    //                 setImages((old)=>[...old,reader.result])
    //             }
    //         }
    //         reader.readAsDataURL(file);
    //     })
    //  }
  return (
    <>
     {loading ? <Loader/> :(
       <div className='dashboard'>
        <Sidebar/>
        <div className='newProductContainer new-product-form'>
            <div className='product-creation-form'>
                <div className='header'>
                <p className='form-header-text'>Add product</p>
                </div>
                <FormProvider {...methods}>
                <form 
                   onSubmit={e => e.preventDefault()}
                   noValidate
                   autoComplete="off"
                   className="container"
                 >
                    <div className='form-flex-container'>
                        <div className='flex-container-1'>
                                <div className='creation-from-card'>
                                    
                                    <div className='form-card-row'>
                                        <div>
                                            <Input {...name_validation} />
                                        </div>
                                        
                                    </div>
                                    <div className='form-card-row'>
                                        
                                        <div>
                                            <div className='form-input-wrapper'>
                                                <Input {...desc_validation}/>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                {/* <div className='creation-from-card upload-image-card'>
                                    
                                     <div className='form-card-row'>
                                        <p className='from-input-label'>Media</p>
                                        <div>
                                            <div className='form-input-wrapper'>
                                                <label for='Pimage'><span className='form-title-value'>Upload new</span></label>
                                                <input id='Pimage' type='file'/>
                                            </div>
                                        </div>
                                        
                                    </div> 
                                    
                                </div> */}
                                {errror && <InputError message="Please add Options"/>}
                                <div className='creation-from-card variant-card'>
                                    <p className='from-input-label'>Variant</p>
                                    <div className='form-card-row row-link'>

                                        <Link onClick={submitReviewToggleb}><AddIcon fontSize='small'/> Add option</Link>
                                            <Dialog aria-labelledby='simple-dialog-title' open={open} onClose={submitReviewToggleb}>
                                                <DialogTitle>Add option</DialogTitle>
                                                <DialogContent className='submitDialog'>
                                                    {optionError && <InputError message='Add option name and option value'/>}
                                                    <div className='input-wrapper-admin-personel-info'>
                                                        <p className='input-label'>Option name</p> 
                                                        <input type='text' required onChange={(e)=>setOption(e.target.value)}/>
                                                    </div>
                                                    
                                                    <form>
                                                    <div className='input-wrapper-admin-personel-info'>
                                                       
                                                       <p className='input-label'>Option value</p>
                                                       <input type='text' value={optionName} required  onChange={(e)=> setOptionName(e.target.value)}/>
                                                       <div className='option-tag-wrapper'>
                                                       {optionValue.map(artist => (
                                                           <div>
                                                               <span className='option-value-tag'>{artist.value}</span>
                                                               <span onClick={()=>{
                                                                   setOptionValue(
                                                                       optionValue.filter(a =>
                                                                         a.id !== artist.id
                                                                       ))
                                                               }} className='clear-icon'><ClearIcon fontSize='small'/></span>
                                                           </div>
                                                           
                                                       
                                                       ))}
                                                       
                                                       </div>

                                                       <button onClick={addValueHandler}>Add</button>
                                                   
                                                    </div>
                                                    </form>
                                                    

                                                    <DialogActions>
                                                        <div className='personel-detail-edit-action'>
                                                        <button onClick={submitReviewToggleb}>Cancel</button>
                                                        <button onClick={addOptionHandler}>Add</button>
                                                        </div>
                                                    </DialogActions>
                                                </DialogContent>
                                        </Dialog>
                                    </div>
                                    <div className='form-card-row '>
                                        {options && options.map((i)=> 
    
                                          <div className='options-row'>
                                                <div>
                                                <p className='form-title-text'>{i.option}</p>
                                                <p className='form-title-value'>
                                                    {i.optionValue && i.optionValue.map((o)=><>
                                                    <span className='option-value'>{o.value}</span>
                                                    </>)}
                                                </p>
                                                </div>
                                                <div>
                                                        <DeleteIcon onClick={()=>removeOptionHandler(i.id)} fontSize='small'/>
                                                </div>
                                          </div>
                                          
                                        )}
                                             
                                       
                                    </div>
                                    <div className='form-card-row row-link'>
                                        {options.length !==0 && <Link onClick={createVariantToggle}><AddIcon fontSize='small'/>Add Variant</Link>}
                                        <Dialog aria-labelledby='simple-dialog-title' open={vopen} onClose={createVariantToggle}>
                                                <DialogTitle>Add variant</DialogTitle>
                                                <DialogContent className='submitDialog'>
                                                        <VariantForm options={options}/>
                                                </DialogContent>
                                        </Dialog>
                                    </div>
                                    <div className='form-table-card-row'>
                                        {variantInfo.length !==0 && <table>
                                            <thead>
                                                <tr>
                                                    <th className='variant-tag'>Variant</th>
                                                    <th>Price</th>
                                                    <th>Available</th>
                                                    <th>On hand</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {variantInfo && variantInfo.map((i)=>
                                                    <tr>
                                                       <td>
                                                          {i.variantOptions && i.variantOptions.map((o)=><span>{o.value}/</span>)}
                                                       </td>
                                                       <td>
                                                           <div className='form-input-wrapper'>  
                                                               <input value={i.price} type='number'/>
                                                           </div>
                                                       </td>
                                                       <td>
                                                           <div className='form-input-wrapper'>  
                                                               <input value={i.stock} type='number'/>
                                                           </div>
                                                       </td>
                                                       <td>
                                                           <div className='form-input-wrapper'>  
                                                               <input type='number'/>
                                                           </div>
                                                       </td>
                                                       <td>
                                                           <button>Edit</button>
                                                       </td>
                                               
                                                   </tr>
                                                
                                                
                                                )}
                                                
                                            </tbody>
                                        </table>}
                                    </div>
                                    
                                </div>
                        </div>
                        <div className='flex-container-2'>
                                <div className='creation-from-card'>   
                                    <div className='form-card-row'>
                                            <Input {...status_validation}/>
                                    </div>    
                                </div>
                                <div className='creation-from-card caragory-card'>   
                                    <div className='form-card-row'>
                                        <p className='form-title-value'>Product organization</p>
                                            
                                            <Input {...ptype_validation}/>

                                           
                                            <Input {...catagory_validation}/>
                                            
                                                <div className='form-input-wrapper'>
                                                
                                                    <p className='from-input-label' >Tag</p>
                                                    <span className='form-tag-btn'  onClick={addProductTagHandler}>add</span>
                                                    <input type='text'  onChange={(e)=> setTag(e.target.value)}/>
                                                    <div className='option-tag-wrapper'>
                                                        {pTags.map(tag => (
                                                            <div>
                                                                <span className='option-value-tag'>{tag.Tag}</span>
                                                                <span className='clear-icon'><ClearIcon fontSize='small'/></span>
                                                            </div>
                                                            
                                                        
                                                        ))}         
                                                    </div>
                                                
                                                </div>
         
                                    </div>    
                                </div>
                        </div>
                        
                    </div>
                    <div className='form-actions'>
                        <button>Discard</button>
                        <button onClick={onSubmit}>Save</button>
                    </div>


                </form>
                </FormProvider>
            </div>
        </div>
     </div>
     )}
    </>
  )
}



export default NewProducts