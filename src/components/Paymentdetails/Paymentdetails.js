import React, { useState, useEffect } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import FormInput from './../forms/FormInput';
import BlueButton from './../BlueButton/BlueButton'
import { CountryDropdown } from 'react-country-region-selector';
// import { apiInstance } from './../../Utils';
import { selectCartTotal, selectCartItemsCount, selectCartItems, selectdiscountCartTotal } from './../../redux/Cart/cart.selector';
import { saveOrderHistory } from './../../redux/Orders/orders.actions';
// import { clearCart } from './../../redux/Cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './styles.scss';
import Item from '../Checkout/Item/Item';
import Paymentitems from './paymentitem/Paymentitems';
import {motion} from 'framer-motion'
// import Razorpay from 'razorpay'; 
import axios from 'axios';
import Estimated from '../Checkout/Estitotal/Estimated';
import { setLoader } from '../../redux/User/user.actions';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
display: block;
margin: 0 auto;
border-color: rgb(0, 17, 53);
color:rgb(0, 17, 53);

`;

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
  distotal:selectdiscountCartTotal

});

const discount = "asdad"


const initialAddressState = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postal_code: '',
  country: '',
};

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'


const PaymentDetails = () => {
  // const stripe = useStripe();
  // const elements = useElements();
  const history = useHistory();
  const { total, itemCount, cartItems, distotal } = useSelector(mapState);
  const dispatch = useDispatch();
  const [shippingAddress, setShippingAddress] = useState({ ...initialAddressState });
  const [recipientName, setRecipientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [coupon, setCoupon] = useState('');
  const [ recipientLastName, setRecipientLastName] = useState('');
  const [totalafdis, setTotalafdis] = useState()
  const [savedmoney, setSavedmoney] = useState(false)
  const [invalidcoupon, setInvalidcoupon] = useState(false)
  const [required, setRequired] = useState(true)
  const [ham,setHam] = useState()
  const [loader,setLoader] = useState(false)
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("rgb(0, 17, 53)");
  

useEffect(()=>{
  setSavedmoney(false)
},[])


 

useEffect(()=>{
  setTotalafdis(distotal)
},[])
  useEffect(() => {
    if (itemCount < 1) {
      history.push('/dashboard');
    }

  }, [itemCount]);

  const handleShipping = evt => {
    const { name, value } = evt.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value
    });
  };

   
const submitcoupon = (e) => {
  e.preventDefault()
  if(coupon==discount){
    const totalafterdis = total - (Math.round((total*10)/100)) 
    setTotalafdis(totalafterdis)
    setSavedmoney((Math.round((total*10)/100)))
    setInvalidcoupon(false)
  }else{
        setInvalidcoupon(true)
        setSavedmoney(false)
  }
}

const handleamount = (h) =>{
  setHam(h)
}

// console.log('ham',ham)
  useEffect(()=>{
    if(loader===true){
      setInterval(() => {
        setLoader(false)
      }, 10000);
    }
  },[loader])

  async function displayRazorpay(e) {
    e.preventDefault();
    // console.log('adwdas')
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    setLoader(true)
		if (!res) {
			alert('failed to load. Are you online?')
			return
		}
     
  
    const amounttt=ham;

		const data = await fetch('http://localhost:5001/the-haberdasher/us-central1/api/razorpay', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amounttt })

         }).then((t) =>
          t.json()
          // console.log('sucess')
		) 
    setLoader(false)


    // const data = apiInstance.post('/razorpay', {
    //   newamount: JSON.stringify({ amounttt })
    // })
  //   key_id: "rzp_test_y3e0iCGIVua2gp",
  // key_secret: "HtM8IOuDYpMbmJJdU1Vai6lR",
  // rzp_live_ahbxFGQ2PnsjH0

		const options = {
			key: __DEV__ ? 'rzp_test_y3e0iCGIVua2gp' : 'rzp_test_y3e0iCGIVua2gp',
			currency: data.currency,
			amount: data.amount,
			
			name: 'Shopping',
			description: 'HDWAM clothing ltd.',
			handler: function (response) {
				// alert(response.razorpay_payment_id)
				// alert(response.razorpay_order_id)
				// alert(response.razorpay_signature)
        const configOrder = {
          orderTotal: totalafdis,
          orderItems: cartItems.map(item => {
            const { documentID, productThumbnailhd, productName,
              productPrice, quantity, selected } = item;

            return {
              documentID,
              productThumbnailhd,
              productName,
              productPrice,
              quantity,
              selected
            };
          })
        }
        dispatch(
          saveOrderHistory({...configOrder,email,phone,shippingAddress})
        );
        history.push('/orderplaced');
			},
		
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

  // const handleFormSubmit = async evt => {
  //   evt.preventDefault();
  //   const cardElement = elements.getElement('card');

  //   if (
  //     !shippingAddress.line1 || !shippingAddress.city ||
  //     !shippingAddress.state || !shippingAddress.postal_code ||
  //     !shippingAddress.country ||
  //     !recipientName || !nameOnCard
  //   ) {
  //     return;
  //   }

  //   apiInstance.post('/payments/create', {
  //     amount: totalafdis * 100,
  //     shipping: {
  //       name: recipientName,
  //       address: {
  //         ...shippingAddress
  //       }
  //     }
  //   }).then(({ data: clientSecret }) => {

  //     stripe.createPaymentMethod({
  //       type: 'card',
  //       card: cardElement,
  //       billing_details: {
  //         name: nameOnCard,
  //         address: {
  //           ...shippingAddress
  //         }
  //       }
  //     }).then(({ paymentMethod }) => {

  //       stripe.confirmCardPayment(clientSecret, {
  //         payment_method: paymentMethod.id
  //       })
  //       .then(({ paymentIntent }) => {

  //         const configOrder = {
  //           orderTotal: totalafdis,
  //           orderItems: cartItems.map(item => {
  //             const { documentID, productThumbnail, productName,
  //               productPrice, quantity } = item;

  //             return {
  //               documentID,
  //               productThumbnail,
  //               productName,
  //               productPrice,
  //               quantity
  //             };
  //           })
  //         }

  //         dispatch(
  //           saveOrderHistory({...configOrder,email,phone})
  //         );
  //       });

  //     })


  //   });

  // };

  const configCardElement = {
    iconStyle: 'solid',
    style: {
      base: {
        fontSize: '16px'
      }
    },
    hidePostalCode: true
  };

  return (
    <div className='payment_details'>
      <div className='top_margin_checkout'>
          
          </div>
          <div className='order_summary_header'>
               Order Details
            </div>
           {loader?<div className='cliploader_payment_sec'>
             <div className='cliploader_payment_sec_pos'><ClipLoader color={color} loading={loading} css={override} size={80} /></div>
            
            </div>:''} 
        <div className='order_details'>
           
            {cartItems.map((item, pos) => {
                return (
              
                      <Paymentitems {...item} />
                
                );
              })}
        </div>
          <div className='order_summary_header'>
                Order Summary
              </div>
        <div className='order_summary'>
            <div className='cart_section_totals'>
              <div className='cart_section_subtotal'>
                  <div className='cart_section_subtotal_text'>
                    subtotal
                  </div>
                  <div className='cart_section_subtotal_price'>
                  ₹ {total}
                   {/* {total} */}
                  
                  </div>
              </div>
              <div className='cart_section_subtotal'>
                <div className='cart_section_subtotal_text'>
                      shipping
                </div>
                <div className='cart_section_subtotal_price'>
                ₹ free
                </div>
              </div>
              <div className='checkout_border'>

        </div>
        <div className='cart_section_estimated_total'>
             <Estimated handleamount={handleamount}/>

        </div>
        <div className='checkout_border'>

        </div>

            </div>
        </div>
        
      <div className='shipping_header'>
        Shipping Details
      </div>
        <div className='address_details'>
          <form onSubmit={displayRazorpay} className="checkoutform">
            <div className="shipping_details">
                        <div className="shipping_address_input">
                          <FormInput
                              required
                              placeholder="* First Name"
                              name="recipientName"
                              handleChange={evt => setRecipientName(evt.target.value)}
                              value={recipientName}
                              type="text"
                            />
                            {/* {required?<div className='required_values'>* required</div> : ''} */}
                        </div>
                        <div className="shipping_address_input">
                          <FormInput
                              required
                              placeholder="* Second Name"
                              name="recipientName"
                              handleChange={evt => setRecipientLastName(evt.target.value)}
                              value={recipientLastName}
                              type="text"
                            />
                            {/* {required?<div className='required_values'>* required</div> : ''} */}
                        </div>
                        <div className="shipping_address_input">
                            <FormInput
                                required
                                placeholder="* Address"
                                name="line1"
                                handleChange={evt => handleShipping(evt)}
                                value={shippingAddress.line1}
                                type="text"
                              />
                              {/* {required?<div className='required_values'>* required</div> : ''} */}
                        </div>
                        <div className="shipping_address_input">
                              <FormInput
                                    required
                                    placeholder="* Postal Code"
                                    name="postal_code"
                                    handleChange={evt => handleShipping(evt)}
                                    value={shippingAddress.postal_code}
                                    type="text"
                              />
                              {/* {required?<div className='required_values'>* required</div> : ''} */}
                        </div>
                        <div className="shipping_address_input">
                          <FormInput
                              required
                              placeholder="* State"
                              name="state"
                              handleChange={evt => handleShipping(evt)}
                              value={shippingAddress.state}
                              type="text"
                            />
                            {/* {required?<div className='required_values'>* required</div> : ''} */}
                        </div>
                        <div className="shipping_address_input">
                            <FormInput
                                required
                                placeholder="* City"
                                name="city"
                                handleChange={evt => handleShipping(evt)}
                                value={shippingAddress.city}
                                type="text"
                              />
                              {/* {required?<div className='required_values'>* required</div> : ''} */}
                        </div>
                        <div className="shipping_address_input">
                          <FormInput
                              required
                              placeholder="* Phone"
                              name="phone"
                              handleChange={evt => setPhone(evt.target.value)}
                              value={phone}
                              type="text"
                            />
                            {/* {required?<div className='required_values'>* required</div> : ''} */}
                        </div>
                      </div>
    
                      <BlueButton type="submit">
                        Procees to pay
                      </BlueButton>
        </form>
        </div>
        
    </div>
  );
}

export default PaymentDetails;