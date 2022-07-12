import React from 'react'
import { BiHeart } from "react-icons/bi";
import './productdata.scss'
import { Accordion } from 'react-bootstrap-accordion'
import 'react-bootstrap-accordion/dist/index.css'
import ProductColors from '../ProductColors/ProductColors'
import BlueButton from '../../../components/BlueButton/BlueButton';
// import {handleAddToCart} from './../../../redux/Cart/cart.actions'


function ProductData() {
  return (
    <div className='product_data'>
        <div className='brand_name'>
          The haberdasher
        </div>

        <div className='product_name'>
            <div className='product_name_data'>
              The Iconic Mesh Polo 
            </div>
            <div className='wiishlist_icon'>
              <BiHeart />
            </div>
        </div>

        <div className='product_price'>
          $58.00
        </div>

        <div className='product_colors'>
          <div className='product_colors_orientation'>
            <ProductColors color='blue' />
          </div>
          <div className='product_colors_orientation'>
            <ProductColors color='red' />
          </div>
          <div className='product_colors_orientation'>
            <ProductColors />
          </div>
          <div className='product_colors_orientation'>
            <ProductColors />
          </div>
          <div className='product_colors_orientation'>
            <ProductColors />
          </div>
          <div className='product_colors_orientation'>
            <ProductColors />
          </div>
          <div className='product_colors_orientation'>
            <ProductColors />
          </div>
          <div className='product_colors_orientation'>
            <ProductColors />
          </div>
          <div className='product_colors_orientation'>
            <ProductColors />
          </div>
          <div className='product_colors_orientation'>
            <ProductColors />
          </div>
          <div className='product_colors_orientation'>
            <ProductColors />
          </div>
          <div className='product_colors_orientation'>
            <ProductColors />
          </div>
          
        </div>

        <div className='product_sizes'>
        <div>
            Xs
          </div>
          <div>
            S
          </div>
          <div>
            M
          </div>
          <div>
            L
          </div>
          <div>
            XL
          </div>
          <div>
            XXL
          </div>
        </div>

        <div className='product_size_guide'>
            size chart
        </div>

        <div className='product_size_error'>
            * please select size
        </div>

        <div className='product_add_button' >
          <BlueButton>
              Add to bag
          </BlueButton>
            
        </div>

        <div className='product_reviews'>

        </div>
        <div className='accordian_ele'>
        {/* <Accordion title="Custom Accordion Title" /> */}
          <Accordion title="Description">
          An American style standard since 1972, the Polo shirt has been imitated but never matched. Over the decades, Ralph Lauren has reimagined his signature style in a wide array of colors and fits, yet all retain the quality and attention to detail of the iconic original. This relaxed version is made from our highly breathable cotton mesh, which offers a textured look and a soft feel. 
          </Accordion>
          <Accordion title="Details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            eligendi odit ducimus eos maiores, reiciendis numquam voluptas
            cupiditate! Eligendi, aliquid optio voluptates ut quas minus provident
            voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores
            consequatur voluptate deleniti. Fuga repudiandae fugit facere maiores
            eligendi nulla? Exercitationem rerum optio esse tempore accusantium
            unde.
          </Accordion>
          <Accordion title="Shipping and free return">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            eligendi odit ducimus eos maiores, reiciendis numquam voluptas
            cupiditate! Eligendi, aliquid optio voluptates ut quas minus provident
            voluptas quam voluptatum corrupti! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Earum aspernatur assumenda nihil maiores
            consequatur voluptate deleniti. Fuga repudiandae fugit facere maiores
            eligendi nulla? Exercitationem rerum optio esse tempore accusantium
            unde.
          </Accordion>
        </div>
      

    </div>
  )
}

export default ProductData