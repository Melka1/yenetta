import React from 'react'
import './styles.css'

function Chcekbox({label}) {
  return (
    <label class="container">{label}
        <input name='policy' type="checkbox"/>
        <span class="checkmark"></span>
    </label>
  )
}

export default Chcekbox