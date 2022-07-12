import React from 'react'
import { BiPackage } from "react-icons/bi";
import Itemdetails from '../Itemdetails/Itemdetails';
import './orderitem.scss'

function Orderitem({order}) {
    const {orderItems,phone,shippingAddress,orderTotal,} = order
  return (
    <div className='ordeitem_section'>
            <div className='confirm_status'>
                    <div className='confirm_status_icon'>
                            <BiPackage />
                    </div>
                    <div className='confirm_status_confirm'>
                            <div className='confirm_status_confirm_text'>
                                    confirmed
                            </div>
                            <div className='confirm_status_confirm_arr'>
                                    Arriving on 14 jun
                            </div>
                    </div>
            </div>
            <div className='delivery_address'>
                <div className='delvery_address_title'>
                        Delivery Address
                </div>
                <div className='delivery_address_details'>
                        <div className='delivery_address_pers'>
                            <div className='delivery_address_name'>
                                    Rajasekhar |
                            </div>
                            <div className='delivery_address_phone'>
                                    {phone}
                            </div>
                        </div>
                        <div>
                            {shippingAddress.line1}, {shippingAddress.city}, {shippingAddress.state}
                        </div>
                </div>
            </div>

            <div className='order_detials_sec'>
                {orderItems.map((item)=>{
                    return(
                        <Itemdetails item={item} />
                    )
                    
                })}
            </div>
    </div>
  )
}

export default Orderitem