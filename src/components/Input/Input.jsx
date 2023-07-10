import React from 'react'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import './styles.css'

function Input({type, placeholder, hide}) {
  const [show, setShow] = useState(false)
  
  return (
    <div className='input--container'>
        <input type='text' className='input' placeholder={placeholder}/>
        {hide&&<AiOutlineEyeInvisible className='eye' color='gray' fontSize={'1.5rem'}/>}
    </div>
  )
}

export default Input