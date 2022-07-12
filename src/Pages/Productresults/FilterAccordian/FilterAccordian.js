import React from 'react'
import './filteraccordian.scss'
import { BiCaretDown } from "react-icons/bi";

function FilterAccordian({children,title,openacc,handleAcc}) {
  return (
    <div className='filter_accordian'>
        <div onClick={handleAcc} className='filter_accordian_header'>
            <div className='filter_accordian_header_title'>
                {title}
            </div>
            <div className='filter_accordian_header_icon'>
              <BiCaretDown />
            </div>
        </div>
       {openacc?<div className='filter_accordian_body'>
              {children}
        </div>:""} 
    </div>
  )
}

export default FilterAccordian