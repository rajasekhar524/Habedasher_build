import React from 'react'
import { Children } from 'react'
import Header from '../../components/Header/Header'
import HeadermobileV from '../../components/Header/Header_mobile_v/HeadermobileV'
import Headermobilew from '../../components/Header/Header_mobile_w/Headermobilew'
import Footer from '../../components/Footer/Footer'

function Mainlayouto({children}) {
  return (
    <div className='Mainlayouto_sec'>
      <div>
      <Headermobilew />
      </div>
     
        <div>
            {children}
        </div>
        <div>
        <Footer />
      </div>
     
    </div>
  )
}

export default Mainlayouto