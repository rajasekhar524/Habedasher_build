import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, addProduct, reduceCartItem } from '../../../redux/Cart/cart.actions';
// import DeleteIcon from '@material-ui/icons/Delete';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
// import FormSelect from './../../forms/FormSelect/FormSelect'
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import { BiBookHeart } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import './item.scss'

const Item = (product) => {
  const dispatch = useDispatch();

  const {
    productName,
    productThumbnailhd,
    productPrice,
    discountproductPrice,
    quantity,
    documentID,
    productSize,
    selected,
    productColor,
    components
    
  } = product;
  // console.log('items',product)
    

  const handleRemoveCartItem = (documentID) => {
    dispatch(
      removeCartItem({
        documentID
      })
    );
  }

  const handleAddProduct = (product) => {
    dispatch(
      addProduct(product)
    )
  }

  const handleReduceItem = (product) => {
    dispatch(
      reduceCartItem(product)
    );
  }

 

  return (
    <div className='checkout_display_item'>
        <div className='checkout_item_border'>

        </div>
        <div className='checkout_item_section'>
            <div className='checkout_item_image'>
               {productThumbnailhd?<img src={productThumbnailhd} />:<img src='https://flevix.com/wp-content/uploads/2019/07/Round-Line-Loading.gif' />} 
            </div>
            <div className='checkout_item_data'>
                <div className='checkout_item_data_text'>
                <div className='checkout_item_data_text_item'>
                          {/* {productName} */}
                          {productName.length > 14 ? productName.substring(0, 20) + "..." : productName}
                    </div>
                    <div className='checkout_item_data_text_brand'>
                        Brand: The Haberdasher 
                    </div>
                    <div className='checkout_item_data_text_size'>
                          Component: {components}
                    </div>
                    <div className='checkout_item_data_text_color'>
                            Color: {productColor}
                    </div>
                    <div className='checkout_item_data_text_size'>
                          Size: {selected}
                    </div>
                    
                    <div className='checkout_item_data_text_price'>
                        <div className='checkout_item_data_text_dicountprice'>
                        ₹ {discountproductPrice}
                        {/* ₹   17999 */}
                          </div>
                          <div className='checkout_item_data_text_realprice'>
                          {/* ₹   17999 */}
                          {productPrice}
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='checkout_item_data_buttons'>     
                      <div className="cartBtn1"
                          onClick={() => handleReduceItem(product)}>
                          <BiMinus/>
                      </div>
                      <div className="quant">
                          {quantity}
                      </div>
                      
                      <div className="cartBtn2"
                          onClick={() => handleAddProduct(product)}>
                          <BiPlus />
                      </div>

                      <div className="cartbookheart"
                          onClick={() => handleAddProduct(product)}>
                          <BiBookHeart />
                      </div>
                      <div className="carttrash"
                          onClick={() => handleRemoveCartItem(documentID)}>
                          <BiTrash />
                      </div>
            </div>

       
    </div>
  );
}

export default Item;