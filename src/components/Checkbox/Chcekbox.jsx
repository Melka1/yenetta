import React from 'react'
import './styles.css'

function Chcekbox({label}) {
  return (
    <label className="container">{label}
        <input name='policy' type="checkbox"/>
        <span className="checkmark"></span>
    </label>
  )
}

export default Chcekbox