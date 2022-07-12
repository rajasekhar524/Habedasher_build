import React from 'react'
import './button.scss'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

function Button({text,icon,bg,color,...otherProps}) {

  const btnstyle={
    // width:"80%",

    // backgroundColor:bg==='blue'?'var(--blue)':'var(--white)',
    // color:color==='white'?'var(--white)':'var(--blue)',
    paddingTop:"1.1rem",
    paddingRight:"2rem",
    paddingBottom:"1.1rem",
    paddingLeft:"2rem",

    
  }
  return (
    <div style={btnstyle} {...otherProps}  className='button_comp' >
        {icon!=null?<div className='button_icon'>
          {icon=='facebook' &&<FaFacebook color='#3b5998' />}
          {icon=='google' &&<FaGoogle color='3cba54' />}
          
        </div>:''}
        <div className='button_text'>
            {text}
        </div>
    </div>
    
  )
}

export default Button