import React from 'react'
import { Children } from 'react'
import Header from '../../components/Header/Header'
import HeadermobileV from '../../components/Header/Header_mobile_v/HeadermobileV'
import Footer from '../../components/Footer/Footer'

function Mainlayout({children}) {
  return (
    <div className='Mainlayout_sec'>
    
        <div className='Mainlayout_header'>
        <HeadermobileV />
      </div>
     
        <div className='Mainlayout_children'>
            {children}
        </div>
        <div className='Mainlayout_footer'>
        <Footer />
      </div>
      
    </div>
  )
}

export default Mainlayout