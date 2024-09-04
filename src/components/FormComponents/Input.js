import cn from 'classnames'
import { useFormContext } from 'react-hook-form'
import { findInputError,isFormInvalid } from '../../utils'
import { AnimatePresence , motion } from 'framer-motion'
import {MdError} from 'react-icons/md'
import '../dashboard/mainCss/newProductForm.css'

export const Input = ({name,label,type,id,placeholder,
                      validation,multiline}) => {

  const {
    register,
    formState:{errors},
  } = useFormContext()

  const inputErrors = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)

  return(
    <div className='form-input-wrapper'>
        <p htmlFor={id} className='from-input-label'>{label}</p>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError 
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
        {multiline ? (
        <textarea
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}
      {}
      
     </div>
  )

    
}
export const InputError = ({ message }) => {
    return (
      <motion.p className='input-error'
        {...framer_error}
      >
        <MdError />
        {message}
      </motion.p>
    )
}

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
}

