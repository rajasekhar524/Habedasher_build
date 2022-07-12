import React from 'react'
import './filterinput.scss'

function Filterinput({title,valid,handleChange,...otherProps}) {

  return (

       <div className="radio_input">
          <div className='radio_input_button'>
            <div className='radio_input_button_color_blue'>
            </div>
          </div>
          <div className='radio_input_button_color_white'>
              {title}
          </div>
       </div>
  
  )
}

export default Filterinput