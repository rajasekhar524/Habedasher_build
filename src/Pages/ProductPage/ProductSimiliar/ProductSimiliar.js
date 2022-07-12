import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './productsimiliar.scss'
import {Link, NavLink} from 'react-router-dom'
import { useEffect } from 'react';
import { fetchProductsDressType, fetchProductsStart } from '../../../redux/Products/products.actions';

const mapState = ({ loadingData,productsData }) => ({
  products: productsData.products,
  loading:loadingData.loading
});

function ProductSimiliar({type}) {
 
  const dispatch = useDispatch();
  const { products,loading } = useSelector(mapState);
  const { data, queryDoc, isLastPage } = products;
  console.log('asdadadasda',data)

  useEffect(()=>{
 
    dispatch(
      fetchProductsDressType({ type }),
    )
  },[])
  return (
    <div className='product_simililar_layout'>
      {data && data.map((dat)=>{
        const {
          documentID,
          productThumbnailhd,
          productName,
          productPrice,
          productCategory
        } = dat;
        if(productCategory === type)
        return(
          <div className='product_simililar'>
              <Link to={`/product/${documentID}`}>
              <div className='product_simililar'>
                <img src={productThumbnailhd} />
              </div>
              </Link>
              <Link to={`/product/${documentID}`}>
              <div className='product_simililar_name'>
                {productName}
              </div>
              <div className='product_simililar_price'>
               Rs. {productPrice}
              </div>
              </Link>
          </div>
        )
      })}
    </div>
    
  )
}

export default ProductSimiliar