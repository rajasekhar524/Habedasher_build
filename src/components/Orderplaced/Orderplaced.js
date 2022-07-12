import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import BlueButton from '../BlueButton/BlueButton'
import './orerplaced.scss'
import { motion } from "framer-motion";
import verified from '../../assets/verified.gif'

function Orderplaced() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
        setIsOpen(true)
        setInterval(()=>{
            setIsOpen(false)
        },5000)
    },[])
  return (
    <div className='orderplaced_section'>
     
        <div className='orderplaced_section_img'>
        <motion.div
            layout
            data-isOpen={isOpen}
            initial={{  }}
            className="parent_order"
          
            >
            <img className='order_img' src={verified} />
            
    </motion.div>
            <img src='https://img.freepik.com/free-vector/taking-orders-by-phone-store-contact-center-customers-support-easy-order-fast-delivery-trade-service-call-center-operator-cartoon-character_335657-2564.jpg?t=st=1656938165~exp=1656938765~hmac=d2fa8216fdf20f5dca5b31ec7167fb44134e4c0ad8257f3bff75512d53b9e4c3&w=740' />
        </div>
        <div className='orderplaced_section_suc'>
            Your order has been placed successfully!
        </div>
        <div className='orderplaced_section_par'>
            Your order has been successfully completed. Within moments you will receive a notification for order confirmation
        </div>
        <div className='orderplaced_section_btn'>
            <Link to = '/'>
                <BlueButton>
                    shopping More
                </BlueButton>
            </Link>
        </div>
    </div>
  )
}

export default Orderplaced