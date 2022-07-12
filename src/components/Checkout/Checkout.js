import React,{useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal, selectdiscountCartTotal,selectCartMainTotal } from './../../redux/Cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import './styles.scss';
import BlueButton from '../BlueButton/BlueButton';
import Item from './Item/Item';
import { useDispatch } from 'react-redux';
import { GiCargoShip } from "react-icons/gi";
import { GiBoxUnpacking } from "react-icons/gi";
import { GiCagedBall } from "react-icons/gi";
import { motion } from "framer-motion"
import love from './../../assets/love.gif'
import Estimated from './Estitotal/Estimated';
import {loadingState} from './../../redux/Loading/loading.actions'


// import { BiCar } from "react-icons/bi";


// import DeleteIcon from '@material-ui/icons/Delete';
// import Forminput from './../forms/FormInput'
// import { apiInstance } from '../../Utils/';
// import Footer from '../Footer/Footer';
// import Headerthree from '../headerthree/Headerthree';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  distotal:selectdiscountCartTotal,
  maintotal:selectCartMainTotal,
  
});

const mapnewState = state => ({
  statein: state.loadingData.loading.walletcl,
  currentUser:state.user.currentUser,
});

const transition = {
  duration: 0.3,
  ease: [0.23, 0.13, 0.53, 0.96]
};

// const imageVariants = {
//   exit: { y: "50%", opacity: 0, transition },
//   enter: {
//     y: "0%",
//     opacity: 1,
//     transition
//   }
// };

const backVariants = {
  exit: { y: 0.1, opacity: 0.2, transition },
  enter: { y: 0, opacity: 1, transition: { delay: 0, ...transition }}
};

const handleamount =()=>{

}
// function loadScript(src) {
//   return new Promise ((resolve) => {

//     const script = document.createElement('script')
//     script.src = src

//     script.onload = () =>{
//       resolve(true)
//     }
//     script.onerror = () =>{
//       resolve(false)
//     }
//     document.body.appendChild(script)
//   })
  
// }

const __DEV__ = document.domain === 'localhost'

const Checkout = ({ }) => {
  const history = useHistory(); 
  const { cartItems, total, distotal, maintotal } = useSelector(mapState);
  const [coupon, setCoupon] =useState()
  const [walletcl, setWalletcl] = useState(false)
  const errMsg = 'You have no items in your cart.';
  const dispatch = useDispatch();
  const [savings, setSavings] = useState()

  
  const { statein,currentUser } = useSelector(mapnewState);
  

  useEffect(()=>{
    // console.log('fired')
    if(walletcl===false){
      
       setSavings(maintotal -total)
    } else if (walletcl===true) {

      setSavings((maintotal -total) + 1000)
    }
  },[walletcl])



  useEffect(()=>{
    dispatch(loadingState({walletcl}))
    
  },[walletcl])

  return (
    <motion.div initial="exit" animate="enter" exit="exit" variants={backVariants} className='checkout_section'>
      {cartItems.length!=0 ? <div className="checkout">
      
      {/* <div className='top_margin_checkout'>
        
      </div> */}
      
      <div className='checkout_header'>
        Shopping Bag 
        {/* ({cartItems.length}) */}
      </div>
      <div className='checkout_para_section'>
          <div className='checkout_para_section_text'>
          Free Shipping with an Account
          </div>
          <div className='checkout_para_section_parag'>
          Sign in or Create a free account for complimentary shipping on all of your orders. Join us or Sign In. (Details) 
          </div>
      </div>
      <div className='checkout_items'>
          {cartItems.map((item, pos) => {
              return (
                    <Item {...item} />
              );
            })}
      </div>
      <div className='cart_section_promo'>
            
      </div>
      <div className='ORDER_SUMMARY'>
          ORDER SUMMARY
      </div>
      <div className='cart_section_totals'>
         
                <div className='cart_section_subtotal'>
                    <div className='cart_section_subtotal_text'>
                      subtotal
                    </div>
                    <div className='cart_section_subtotal_price'>
                    ₹ {total}
                    
                     {/* ₹   17999 */}
                    </div>
                </div>
                <div className='cart_section_subtotal'>
                  <div className='cart_section_subtotal_text'>
                        shipping
                  </div>
                  <div className='cart_section_subtotal_price'>
                   free
                  </div>
                  {/* <div onClick={()=>{setWalletcl(!walletcl)}}>Remove</div> */}
                </div>
                <div className='cart_section_subtotal'>
                  <div className='cart_section_subtotal_text'>
                      wallet
                  </div>
                  <div className='cart_section_subtotal_price_wallet'>
                    
                    <div className='cart_section_subtotal_price_wal'>
                      <div className='cart_section_subtotal_price_wal_apply_button' onClick={()=>{setWalletcl(!walletcl)}}>
                        {currentUser!=null?`${!statein?'Apply': 'Remove'}`:<Link to='/register'><div>'Signin to apply'</div></Link>}
                      </div>
                      <div className='cart_section_subtotal_price_wal_apply_button_bt'>{!walletcl?'₹ 1000': '- ₹ 1000'}</div>
                    </div>
                     {!statein?<div className='cart_section_subtotal_price_wallet_img_av'>
                     * available wallet money
                    </div> :
                    <div className='cart_section_subtotal_price_wallet_img'>
                    <img src = {love} />
                    wallet money applied 
                  
                    </div>}
                   
                  </div>
                 
                </div>
                <div className='cart_section_subtotal'>
                    <div className='cart_section_subtotal_text'>
                      Total Savings
                    </div>
                    <div className='cart_section_subtotal_price'>
                    ₹  {Math.floor(savings)}
                    </div>
                </div>
  
      </div>
      <div className='checkout_border'>
  
      </div>
      <div className='cart_section_estimated_total'>
           <Estimated walletcl={walletcl} handleamount={handleamount}/>
  
      </div>
      <div className='checkout_border'>
  
      </div>
  
      <div className='checkout_button_sec'>
          <BlueButton  onClick={()=>history.push('/payment')}>
              Proceed to checkout
          </BlueButton>
      </div>
      <div className='Need_help_checkout'>
          <b>Need Help?</b> 	&nbsp; Email, 	&nbsp; Chat 	&nbsp;or 	&nbsp;Call 9791058911
      </div>
   
  </div>:
      <div className='empty_cart'> 

        <div className='empty_cart_wrap'>
          <div className='empty_cart_header'>
                Your Shopping Bag is Empty
            </div>  
            <div className='empty_cart_para'>
                Explore our products to see and add the products
            </div>  
            <div className='empty_cart_btn'>
              <BlueButton>
                Continue Shopping
              </BlueButton>
            </div>    
        </div>
          

          <div className='checkout_icon_ship_sec'>
              <div className='checkout_icon_ship_sec_wrap'>
                <div className='checkout_icon_ship'>
                     <GiCargoShip />
                </div>
                <div className='checkout_icon_ship_text'>
                      Free Fast shipping with Free return
                </div>
              </div>
              <div className='checkout_icon_ship_sec_wrap'>
                <div className='checkout_icon_ship'>
                    <GiBoxUnpacking />
                </div>
                <div className='checkout_icon_ship_text'>
                     Traditional Gift Cards
                </div>
              </div>
              <div className='checkout_icon_ship_sec_wrap'>
                <div className='checkout_icon_ship'>
                    <GiCagedBall />
                </div>
                <div className='checkout_icon_ship_text'>
                     Traditional Gift Cards
                </div>
              </div>
          </div>    

      </div>
          
          }

        
    </motion.div>
    
    
    

    
  );
};

export default Checkout;
  