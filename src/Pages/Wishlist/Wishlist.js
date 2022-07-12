import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import {selectWishlistItems} from './../../redux/Wishlist/wishlist.selector'
import { createStructuredSelector } from 'reselect';
import './styles.scss';
import Wishitem from './Wishitem/Wishitem';
import { GiBoxUnpacking, GiCagedBall, GiCargoShip } from 'react-icons/gi';
import BlueButton from '../../components/BlueButton/BlueButton';




const mapState = createStructuredSelector({
    wishllistItems: selectWishlistItems,
  });
  

function Wishlist() {
    const { wishllistItems } = useSelector(mapState);
    return (
        <div className='wishlist_module'>
        {wishllistItems.length !=0 ?<div className="wishlist">
             <div className='productpage_heading'>
                <div className='productpage_heading_nav'>
                    {/* men / clothing / */}
                </div>
            
                <div className='productpage_heading_caption'>
                    Wishlist
                </div>
            </div>
             {/* <div className="wishheader">
                Wishlist <span>{wishllistItems.length}</span> items
            </div> */}
            
            <div className="wishitems">
                
                {wishllistItems.map((wishitem,pos)=>{
                return(
                    <Wishitem {...wishitem} />
                )
                })}
            </div>
        </div>: <div className='empty_cart'> 

<div className='empty_cart_wrap'>
  <div className='empty_cart_header'>
        Your Wishlist Bag is Empty
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

</div>}
        </div>
    )
}

export default Wishlist
