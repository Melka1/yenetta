import React from 'react'
import './styles.css'

function Button({label, type, style}) {

    return (
        <button style={style} className={"login--button "+ type}>{label}</button>
    )
}

export default Button