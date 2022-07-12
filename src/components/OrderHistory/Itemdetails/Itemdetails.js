import React from 'react'
import './itemdetails.scss'

function Itemdetails({item}) {
    // console.log('item',item)
    const {productThumbnailhd,productName,selected} =item
  return (
    <div className='item_details_sec_items'>
        <div className='order_detials_sec_pic'>
            <img src={productThumbnailhd} />
        </div>
        <div className='order_detials_sec_details'>
            <div  className='order_detials_sec_brand'>
                    The Haberdasher
            </div>
            <div className='order_detials_sec_name'>
                {/* {productName} */}
                {productName.length > 25 ? productName.substring(0, 30) + "..." : productName}
            </div>
            <div className='order_detials_sec_size'>
                Size : {selected}
            </div>
        </div>
    </div>
  )
}

export default Itemdetails