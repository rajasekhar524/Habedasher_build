import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import './styles.scss'
import {Link} from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
    const location = useLocation();
    useEffect(()=>{
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
      },[location])
    return (
        <footer className="footer">
            
            <div className="getourmails">
            
            <div className="icons_footer_head">
            Like it? Share it!
            </div>
            <div className="icons_footer">
                <FaInstagram />   ...
                <FaFacebookF />...
                <FaLinkedinIn />
              
            </div>

           
            </div>
            <div className="info">

                

            <div className="customercare">
                    <h4>customer care</h4>
                    <Link to="/returns">
                        <p>Exchange and Return</p>
                    </Link>
                   
                    {/* <Link to="">
                        <p>Order Tracking</p>
                    </Link> */}
                  
                    <Link to="/wallet">
                         <p>Wallet</p>
                    </Link>
                    
                   
                    <Link to="/cancelpolicy">
                        <p>Cancellation Policy</p>
                    </Link>
                    <Link to="/sizechart">
                        <p>Size Chart</p>
                    </Link>
                    <Link to="/paymentoptions">
                        <p>Payment Options</p>
                    </Link>
                    
                    
            </div>
            <div className="company">
            <h4>The company</h4>
            <Link to="/aboutus">
                 <p>About Us</p>
            </Link>
{/*            
            <Link to="/termsandconditions">    
            <p>Terms & Conditions</p>
            </Link> */}
                   
                
                <Link to="/faqs">
                <p>Faqs</p>
                </Link>
                <Link to="/shipping">
                <p>Shipping</p>
                </Link>
                
                 
            </div>
            <div className="Legal">
            <h4>Contact Us</h4>
            
                
                    <p>Email: contact@thehaberdasher.in</p>
                    <p>9600068595</p>
            </div>
          
            </div>

            <div className="policy">
            <p>All Rights Reserved & Copyright © 2022 HDWAM </p>
            </div>
            {/* <hr></hr> */}
            
            
        </footer>
       )
}

export default Footer
