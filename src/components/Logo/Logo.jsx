import React from 'react'
import './styles.css'
import LogoImage from '../../assets/Logo.svg'

function Logo() {
  return (
    <div className="box">
        <div className="logo-wrapper">
            <div className="logo">
                <img className="img" alt="Logo" src={LogoImage} />
                <h1 className="text-wrapper">Materio</h1>
            </div>
        </div>
    </div>
  )
}

export default Logo