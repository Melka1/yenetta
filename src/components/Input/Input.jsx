import React, {useState, useEffect} from 'react'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import './styles.css'

function Input({type, placeholder, hide}) {
  const [show, setShow] = useState(false)
  const [showContent, setShowContent] = useState(type)

  useEffect(() => {
    if(type!='password')return

    if(!show){
      setShowContent('password')
    } else {
      setShowContent('text')
    }
    console.log(showContent)
  },[show])

  const Eye = ()=>{
    if(show){
      return <AiOutlineEyeInvisible onClick={()=>setShow(prev=>!prev)} className='eye' color='gray' fontSize={'1.5rem'}/>
    } else {
      return <AiOutlineEye onClick={()=>setShow(prev=>!prev)} className='eye' color='gray' fontSize={'1.5rem'}/>
    }
  }
  
  return (
    <div className='input--container'>
        <input type={showContent} className='input' placeholder={placeholder}/>
        {hide&&<Eye/>}
    </div>
  )
}

export default Input