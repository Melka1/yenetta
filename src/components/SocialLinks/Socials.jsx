import React from 'react'

import Facebook from '../../assets/bxl-facebook.svg'
import Twitter from '../../assets/bxl-twitter.svg'
import Github from '../../assets/bxl-github.svg'
import Google from '../../assets/bxl-google.svg'

import './styles.css'

function Socials() {
  return (
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
  )
}

export default Socials