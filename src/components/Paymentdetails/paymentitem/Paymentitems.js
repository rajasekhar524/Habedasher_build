import React from 'react'
import './styles.scss'

function Paymentitems(product) {

    const {
        productName,
        productThumbnailhd,
        productPrice,
        discountproductPrice,
        quantity,
        documentID,
        productSize,
        discountPrice,
        selected
      
        
      } = product;
    return (
        <div className="paymentcartitem">
            <div className="paymentcartitemimage">
                <img src={productThumbnailhd} />
            </div>
            <div className="paymentcartitemdetails">
                
                <div className="paymentcartitemdetailsitemname">
                {productName}
                </div>
                <div className="paymentcartitemdetailsitemsize">
                    Size:{selected}
                </div>
                <div className="paymentcartitemdetailsitemquantity">
                        Qty.{quantity}
                </div>
                <div className='product_item_price'>
                    <div className="paymentcartitemdetailsitemdis">
                        ₹.{discountproductPrice}
                    </div>
                    <div className="paymentcartitemdetailsitem">
                        ₹.{productPrice}
                    </div>
                </div>
                {/* <div className='border_items_address_section'>

                </div> */}
            </div>
           
           
        </div>
    )
}

export default Paymentitems
