import React ,{useState} from 'react'
import { Input } from './Input'
import { FormProvider, useForm } from 'react-hook-form'
import { saveVariantInfo } from '../../actions/productActions'
import { useDispatch,useSelector } from 'react-redux'
import {
    price_validation,
    profit_validation,
    margin_validation,
    cost_validation,
    campareprice_validation,
    weight_validation,
    stock_validation,
} from '../../utils/InputValidations'



const VariantForm = ({options}) => {
  
    const dispatch = useDispatch()

    const methods = useForm()
    const [success, setSuccess] = useState(false)
    const [check,setCheck] = useState(false)
    const [variantOptions,setVariantOptions] = useState([])
    const [vopen, setVopen] = useState(false)


    const createVariantToggle = ()=> {
        vopen ? setVopen(false) : setVopen(true)
    }
    
    
    const onSubmit = methods.handleSubmit((data) => {
        
        dispatch(saveVariantInfo({
            price:data.pnum,
            camparePrice:data.crprice,
            costPerItem:data.cnum,
            profit:data.prnum,
            margin:data.mnum,
            weight:data.wnum,
            stock:data.snum,
            variantOptions
            }));
        methods.reset()
        createVariantToggle();
        setSuccess(true)
    })
    const getOptionHanler = (a,b) =>{
        setVariantOptions([
            ...variantOptions,
            {option:b,value:a}
        ])
    }
    

    const checkBoxToggle = ()=> {
        check ? setCheck(false) : setCheck(true)
    }
    return (
      <FormProvider {...methods}>
       <form
        nSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container2"
       >
            <div className='creation-from-card'>
                    <div className='form-card-row'>  
                            {options && options.map((i)=> 
                                    <div className='form-input-wrapper'>
                                    <p className='from-input-label'>{i.option}</p>
                                    <select onChange={(e)=>getOptionHanler(e.target.value,i.option)}>
                                        <option>--select--</option>
                                        {i.optionValue && i.optionValue.map((o)=>
                                        <option value={o.value}>{o.value}</option>
                                        )}
                                    </select>
                                    </div>         
                            )}
                            
        
                    </div>
                    
                </div>
                <div className='creation-from-card from-pricing-card'>
                <p className='from-input-label'>Pricing</p>
                    
                    <div className='form-card-row'>
                    
                        <Input {...price_validation}/>
                        <Input {...campareprice_validation}/>
                        
                        
                        
                    </div>
                    <div className='form-card-row'>

                            <Input {...profit_validation}/>
                            <Input {...margin_validation}/>
                            <Input {...cost_validation}/>

                        
                    </div>
                    
                </div>
                <div className='creation-from-card'>
                    <p className='from-input-label'>Shipping</p>
                    
                    <div className='form-card-row'>
                        <p className='from-input-label'>
                            <input onChange={checkBoxToggle} type='checkbox'/><span className='form-help-text'>This is physical product</span>
                        </p>
                        <div>
                            {check && 
                             <Input {...weight_validation}/>
                            }
                        </div>
                        
                    </div>
                    
                </div>
                <div className='creation-from-card stock-card'>
    
                    <div className='form-card-row'>
                        <p className='from-input-label'>Stock Available</p>
                        <div>
                            <Input {...stock_validation}/>
                        </div>
                        
                    </div>
                    
                </div>
                <div className='personel-detail-edit-action'>
                <button onClick={onSubmit}>Add</button>
                </div>
       </form>                                        
      </FormProvider>
    )
}

export default VariantForm