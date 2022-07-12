import React,{useState} from 'react'
import './styles.scss'
import {Link} from 'react-router-dom'

function Sidefooter() {
    const [active,setActive] =useState('false')

    return (
        <div className="sidefootersection">
            <Link to="/faqs">
                <div className="footeroption">
                    FAQ's
                </div>
            </Link>
            <Link to="/wallet">
                <div className="footeroption">
                wallet
                </div>
            </Link>   
            <Link to="/cancelpolicy">
                <div className="footeroption">
                    Cancellation Policy
                </div>
            </Link>  
            <Link to="/returns">
                <div className="footeroption">
                returns & exchange
                </div>
            </Link>
            <Link to="/shipping">
                <div className="footeroption">
                    Shipping
                </div>
            </Link>
           
           
            <Link to="/sizechart">
                <div className="footeroption">
                size chart
                </div>
                <Link to="/paymentoptions">
                <div className="footeroption">
                    payment options
                </div>
            </Link>
              
            </Link>  
            <Link to="/termsandconditions">
                <div className="footeroption">
                terms & conditions
                </div>
            </Link>  
        </div>
    )
}

export default Sidefooter
