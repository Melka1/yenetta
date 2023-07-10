import { useState } from 'react'
import './App.css'

import Logo from './components/Logo/Logo'
import Title from './components/Title/Title'
import Subtitle from './components/Subtitle/Subtitle'
import Input from './components/Input/Input'
import Chcekbox from './components/Checkbox/Chcekbox'
import Button from './components/Button/Button'
import Linktext from './components/LinkText/Linktext'
import Partition from './components/Partition/Partition'
import Socials from './components/SocialLinks/Socials'


function App() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="login--container">
      <div className='login--wrapper'>
        <Logo/>
        <Title name={'Adventure starts here 🚀'}/>
      
        <form action="">
            <Subtitle name={'Make your app management easy and fun!'}/>
            <Input type={'text'} placeholder={'Username'}/>
            <Input type={'email'} placeholder={'Email'}/>
            <Input type={'password'} placeholder={'Password'} hide={true}/>
            <Chcekbox label={'I Agree to privacy policy & terms'}/>
            <Button type={'primary'} label={'login'}/>
            <Linktext link={'./signin'} linkTitle={'Already have an account?'} linkLabel={'Sign in instead'}/>
            <Partition name={'or'}/>
            <Socials/>
        </form>
      </div>
    </div>
  )
}

export default App
