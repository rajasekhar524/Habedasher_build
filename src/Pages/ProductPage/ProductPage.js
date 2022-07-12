import React, {useState, useEffect } from 'react';
import { useParams, useHistory,useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';
import { addProduct } from './../../redux/Cart/cart.actions';
import './productpage.scss'
import ProductImages from './ProductImages/ProductImages'
import ProductData from './ProductData/ProductData'
import ProductSimiliar from './ProductSimiliar/ProductSimiliar'
import MainCarousel from './../../components/Comp/MainCarousel/MainCarousel'
import { BiHeart } from "react-icons/bi";
import { Accordion } from 'react-bootstrap-accordion'
import 'react-bootstrap-accordion/dist/index.css'
import ProductColors from '../ProductPage/ProductColors/ProductColors'
import BlueButton from '.././../components/BlueButton/BlueButton'
import Sizes from './Sizes'
import { TiHeart } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import {addProducttoWishlist} from './../../redux/Wishlist/wishlist.actions'

const mapState = state => ({
  product: state.productsData.product
});

function ProductPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const { productID } = useParams();
  const { product } = useSelector(mapState);
  const [wishlistad, setWishlistad] = useState(false)
  const [image,setImage] = useState()
  const [sizeerror,setSizeerror] = useState(false)
  const [sizeerrordis,setSizeerrordis] = useState(false)
  const [nofication, setNotification] = useState(false)
  const [sizes, setSizes] = useState([
    { id: 'S', name: "S", title: "S" },
    { id: 'M', name: "M", title: "M" },
    { id: 'L', name: "L", title: "L" },
    { id: 'XL', name: "XL", title: "XL" },
    { id: 'XXL', name: "XXL", title: "XXL" }
  ])
  const [selected,setSelected] = useState()
  const [sixewprod, setSixwprod] = useState({})
   

  const {
    productThumbnailhd,
    productThumbnail1hd,
    productThumbnail2hd,
    productThumbnail3hd,
    productName,
    productPrice,
    productDesc,
    productCategory,
    productWashcare,
    productColor
  } = product;

  useEffect(()=>{
    if (!location.hash) {
        window.scrollTo(0, 0);
    }
  },[location])

  useEffect(()=>{
    setSixwprod({...product, selected})
  },[selected])

  useEffect(() => {
    dispatch(
      fetchProductStart(productID)
    )

    return () => {
      dispatch(
        setProduct({})
      )
    }

  }, [productID]);

  const handleAddToCart = (product) => {
    if (!product) return;
    setSizeerrordis(true)
    if(sizeerror === true)
    {
      
      // setSizeerror(false)
      // console.log(sixewprod)
      dispatch(
        addProduct(sixewprod)
      );
      history.push('/cart');
    } 
  }

  const handlewishlist = () => {
   
    
    
    setNotification(true)
  }

  setTimeout(()=>{
    setNotification(false)
  },3000)

  const handleaddwishlist = () => {
    setNotification(true)
    setWishlistad(!wishlistad)
    if (!product) return;
        dispatch(
            addProducttoWishlist(product)
        );
        
  }

  const configAddToCartBtn = {
    type: 'button'
  }

  const handleAddToWishlist = (product) => {
    if (!product) return;
    dispatch(
        addProducttoWishlist(product)
    );
  } 

  const changeColor = id => {
   setSelected(id);
   setSizeerror(true)
   setSizeerrordis(false)
  
  };
  
  const one = 'https://i.postimg.cc/PX3P68ZN/0Z9A7315.webp'
  const onee = 'https://i.postimg.cc/5JnY9DG1/0Z9A7314.webp'
  const onewe = 'https://i.postimg.cc/NYFyKpqX/0Z9A7313.webp'
  const onew = 'https://i.postimg.cc/JrnhB4g8/0Z9A7312.webp'

  return (
    <div className='ProductPage'>

        <div className='ProductPageImages'>
          
        <div className='product_images'>
                <MainCarousel 
                    image1= {productThumbnailhd}
                    image2= {productThumbnail1hd}
                    image3= {productThumbnail2hd}
                    image4= ''
                    image5=''
                    cslidesPerView='1'
                    fourslidesPerView='1'
                    sevenslidesPerView='1'
                    oneslidesPerView='1'
                    oneSpacebetween='0'
                    section='first'
                    effect='fade'
                    pagination= {false}
                    zoom={true}
                />
    </div>
            
        </div>
        <div className='ProductPageProductdata'>
            <div className='product_data'>
            <div className='brand_name'>
              The haberdasher
            </div>

            <div className='product_name'>
                <div className='product_name_data'>
                  {productName}
                </div>
                <div className='wiishlist_icon'>
                  {wishlistad?<TiHeart />:<TiHeartOutline onClick={()=>handleaddwishlist()} />} 
                </div>
            </div>

            <div className='product_price'>
              Rs. {productPrice}
            </div>

            <div className='product_sizes'>
                {sizes.map(({ name, id, title }) => (
                  <div key={id} className='size_layout'>                   
                    <div className={selected === id ? "size_bg" : "size_wl"}
                      onClick={() => changeColor(id)}
                      name={name}>
                      {title}
                    </div>
                  </div>
                ))}
            </div>
            

            <div className='product_size_guide'>
                size chart
            </div>

            {sizeerrordis?<div className='product_size_error'>
                * please select size
            </div>:''}

            <div className='product_add_button' onClick={() => handleAddToCart(product)}>
              <BlueButton>
                  Add to bag
              </BlueButton>
                
            </div>

            <div className='product_reviews'>

            </div>
            <div className='accordian_ele'>
            {/* <Accordion title="Custom Accordion Title" /> */}
              <Accordion title="Description">
                  {productDesc}
              </Accordion>
              <Accordion title="Details">
                Color : {productColor}
              </Accordion>
              <Accordion title="Washcare">
               {productWashcare}
              </Accordion>
            </div>
          

        </div>
        </div>
        <div className='ProductPageSimiliarProducts_title'>
          similiar products
        </div>
        <div className='ProductPageSimiliarProducts'>
            
            <ProductSimiliar type={productCategory}/> 

        </div>
        <div className='notification_prod_page'>
           {nofication?<div className='notification_prod_page_text'>Added to wishlist</div>:''}
           {/* 'asdasdad' */}
        </div>
    </div>
  )
}

export default ProductPage