import { useState } from 'react'
import './App.css'
import Logo from './assets/Logo.svg'
import Facebook from './assets/bxl-facebook.svg'
import Twitter from './assets/bxl-twitter.svg'
import Github from './assets/bxl-github.svg'
import Google from './assets/bxl-google.svg'


function App() {
  // const [count, setCount] = useState(0)
  const [checked, setChecked] = useState(false)

  return (
    <div className="login--container">
      <div className='login--wrapper'>
        <div className="box">
          <div className="logo-wrapper">
            <div className="logo">
              <img className="img" alt="Logo" src={Logo} />
              <h1 className="text-wrapper">Materio</h1>
            </div>
          </div>
        </div>

        <div className="label">
          <div className="marketing-automation-wrapper">
            <h1 className="marketing-automation">
              <span className="text-wrapper">Adventure starts here</span>
              <span className="span">&nbsp;</span>
              <span className="text-wrapper-2">🚀</span>
            </h1>
          </div>
        </div>

        <form action="">
          {/* <div className="form--title--wrapper"> */}
            <p className='form--title'>Make your app management easy and fun!</p>
          {/* </div> */}
          <input type="text" name="username" id="username" className='username' placeholder='Username'/>
          <input type="email" name="email" id="email" className="email" placeholder='Email'/>
          <input type="password" name="password" id="password" className='password' placeholder='Password'/>
          <label class="container">I Agree to privacy policy & terms
            <input name='policy' type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <button className="login--button">LOGIN</button>
          <p className='have--an--account'>Already have an account? <a href='./signin'>Sign in instead</a></p>
          <div className='or--container'>
            <div/>
            <p>or</p>
            <div />
          </div>
          <div className="socials">
            <a href="/facebook">
              <img src={Facebook} alt="facebook" />
            </a>
            <a href="/twitter">
              <img src={Twitter} alt="twitter" />
            </a>
            <a href="/github">
              <img src={Github} alt="github" />
            </a>
            <a href="/google">
              <img src={Google} alt="google" />
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
