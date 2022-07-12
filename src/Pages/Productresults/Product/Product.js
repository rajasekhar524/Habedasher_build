import React from 'react'
import './product.scss'
import { Link, useHistory } from 'react-router-dom';
// import Button from './../../forms/Button';
import { useDispatch } from 'react-redux';
import { addProduct } from './../../../redux/Cart/cart.actions';
import ClipLoader from "react-spinners/ClipLoader";
import gif from './../../../assets/gif.gif'
import gif1 from './../../../assets/gif1.gif'

function Product(product) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    documentID,
    productThumbnailhd,
    productThumbnail1hd,
    productName,
    productPrice,
    discountproductPrice
  } = product;

  if (!documentID || !productThumbnail1hd || !productName ||
    typeof productPrice === 'undefined') return null;

    const handleAddToCart = (product) => {
      if (!product) return;
      dispatch(
        addProduct(product)
      );
      history.push('/cart');
    };

  return (
    <div className='product_card_section'>
      <div className='producT_ind_image'>
      <Link to={`/product/${documentID}`}>
        <img src={productThumbnail1hd!=null?productThumbnail1hd:gif1 }/>
      </Link>
      </div>
      <div className='producT_ind_details'>
        <div className='producT_ind_details_brand'>
          The Haberdasher
        </div>
        <div className='producT_ind_details_name'>
        <Link to={`/product/${documentID}`}>
          {productName}
        </Link>
        </div>
        <div className='producT_ind_details_price'>
          <div className='producT_ind_details_price_pri'>
          {/* ₹ 1799.00 */}
          ₹ {productPrice} / -
          </div>
          <div className='producT_ind_details_price_dis'>
          {/* ₹ 1799.00 */}
          {/* {Math.floor(discountproductPrice)} */}
          ₹ {discountproductPrice} / -
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product