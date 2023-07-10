import React from 'react'
import './styles.css'

function Linktext({linkTitle, linkLabel, link}) {
  return (
    <p className='have--an--account'>{linkTitle} <a href={link}>{linkLabel}</a></p>
  )
}

export default Linktext