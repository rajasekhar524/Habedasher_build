import React from 'react'
import './bluebutton.scss'

function BlueButton({children, ...otherProps}) {
  return (
    <button className='bluebutton' {...otherProps}>{children}</button>
  )
}

export default BlueButton