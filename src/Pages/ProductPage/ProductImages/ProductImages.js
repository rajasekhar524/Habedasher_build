import React from 'react'
import MainCarousel from '../../../components/Comp/MainCarousel/MainCarousel'
import './productimages.scss'

function ProductImages(product) {
 
  // console.log('thumbnailasd',productThumbnail)
  setInterval(()=>{
    console.log(product)
    // console.log('thumbnail',productThumbnail)
  },2000)
  

  return (
    <div className='product_images'>
      <MainCarousel 
                    image1=''
                    image2='https://www.rlmedia.io/is/image/PoloGSI/s7-1429052_lifestyle?$rl_df_pdp_4_5_mob_lif$'
                    image3='https://www.rlmedia.io/is/image/PoloGSI/s7-1429052_alternate4?$rl_df_pdp_4_5_mob$'
                    image4='https://www.rlmedia.io/is/image/PoloGSI/s7-1429052_alternate3?$rl_df_pdp_4_5_mob$'
                    image5='https://www.rlmedia.io/is/image/PoloGSI/s7-1429052_alternate3?$rl_df_pdp_4_5_mob$'
                    cslidesPerView='1'
                    fourslidesPerView='1'
                    sevenslidesPerView='1'
                    oneslidesPerView='1'
                    oneSpacebetween='0'
                    section='first'
                    effect='fade'
                    pagination= {false}
                    zoom={true}
                />
    </div>
  )
}

export default ProductImages