import React from 'react'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import './styles.css'

function Input({type, placeholder, hide}) {
  const [show, setShow] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {

  },[show, text])

  
  return (
    <div className='input--container'>
        <input type='text' onChange={({target})=>setText(target.value)} className='input' placeholder={placeholder}/>
        {hide&&<AiOutlineEyeInvisible className='eye' color='gray' fontSize={'1.5rem'}/>}
    </div>
  )
}

export default Input