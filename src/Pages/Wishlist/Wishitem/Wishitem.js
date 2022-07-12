
import React from 'react'
import { useDispatch } from 'react-redux';
import BlueButton from './../../../components/BlueButton/BlueButton'
import './styles.scss'
import {addProduct} from './../../../redux/Cart/cart.actions'
import {removeWishlistItemFromWishlist} from './../../../redux/Wishlist/wishlist.actions'
import { Link } from 'react-router-dom';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Wishitem(product) {
    const dispatch = useDispatch();
    const {
        productName,
     
        productThumbnailhd,
        productPrice,   
        quantity,
        documentID,
        productSize,
        discountproductPrice,
      } = product;

      const discounted = Math.floor(((discountproductPrice*100)/productPrice))

      const handleRemovewishItem = (documentID) => {
        dispatch(
        removeWishlistItemFromWishlist({
            documentID
          })
        );
      }

      const handleAddProduct = (product) => {
        dispatch(
          addProduct(product)
        )
      }

    return (
        // <div className="wishitemcard">
           
        //     <div className="wishitemcardlayout">
        //         <div className="wishclose" onClick={() => handleRemovewishItem(documentID)}></div>
        //         <div className="wishitemimg">
        //             <img src={productThumbnailhd} />
        //         </div>
        //         <div className="wishcontent">
        //             <div className="wishname">
        //                     {productName}
        //             </div>
        //             <div className="wishprices">
        //                 <div className="wishpri">
                    
        //                 ₹.{discountproductPrice}
        //                 </div>    
        //                 <div className="wishdis">
        //                 ₹.{productPrice}
        //                 </div>
        //                 <div className="wishper">
        //                     ({discounted}% OFF)
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="wishbttn">
        //                 <BlueButton className="wishbtn" onClick={()=>handleAddProduct(product)}>
        //                     add to bag
        //                 </BlueButton>
        //             </div>
        //     </div>
        //     {/* <button onClick={() => handleRemovewishItem(documentID)}>
        //         delete
        //     </button> */}
        // </div>
        <div className='product_card_section_wish'>
           
        <div className='producT_ind_image_wish'>
        <Link to={`/product/${documentID}`}>
            <img src={productThumbnailhd!=null?productThumbnailhd:'' }/>
        </Link>
        </div>
        <div className='producT_ind_details_wish'>
            <div className='producT_ind_details_brand_wish'>
            The Haberdasher
            </div>
            <div className='producT_ind_details_name_wish'>
            <Link to={`/product/${documentID}`}>
            {productName}
            </Link>
            </div>
            <div className='producT_ind_details_price_wish'>
            <div className='producT_ind_details_price_pri_wish'>
            {/* ₹ 1799.00 */}
            ₹. {productPrice} / -
            </div>
            <div className='producT_ind_details_price_dis_wish'>
            {/* ₹ 1799.00 */}
            {/* {Math.floor(discountproductPrice)} */}
            ₹. {discountproductPrice} / -
            </div>
            </div>
            <div className="wishclose" onClick={() => handleRemovewishItem(documentID)}>delete</div>
        </div>
        </div>
    )
}

export default Wishitem
