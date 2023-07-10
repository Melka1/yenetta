import React from 'react'
import './styles.css'

function Title({name}) {
  return (
    <div className="label">
        <div className="marketing-automation-wrapper">
        <h1 className="marketing-automation">
            <span className="text-wrapper">{name}</span>
            {/* <span className="span">&nbsp;</span>
            <span className="text-wrapper-2"></span> */}
        </h1>
        </div>
    </div>
  )
}

export default Title