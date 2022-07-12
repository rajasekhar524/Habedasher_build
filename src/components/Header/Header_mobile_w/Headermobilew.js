import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import BurgerButton from '../../Comp/BurgerButton/BurgerButton';
import './headermobilew.scss'
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import { BiClipboard } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";


import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import {signOutUserStart} from '../../../redux/User/user.actions'
import  {useSelector,useDispatch} from 'react-redux'  
import { selectCartItemsCount} from './../../../redux/Cart/cart.selector'
import Search from '../../../Pages/Search/Search';
import { useEffect } from 'react';
import { motion } from "framer-motion"
import SideHeaderNav from '../SideHeaderNav/SideHeaderNav';

const mapState = (state) => ({
  currentUser:state.user.currentUser,
  totalNumCartItems:selectCartItemsCount(state),
  // totalNumWishlistItems:selectWishlistItemsCount(state)
  
});

const transition = {
  duration: 0.5,
  ease: [0.23, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition
  }
};

const backVariants = {
  exit: { y: 100, opacity: 0, transition },
  enter: { y: 0, opacity: 1, transition: { delay: 0, ...transition } }
};


function Headermobilew() {
  const [colorChange, setColorchange] = useState(false);
  const dispatch = useDispatch()
  const {currentUser,totalNumCartItems} = useSelector(mapState)
  const [search, setSearch] = useState(false)
  const [cstyle, setCstyle] = useState(false);
  const [cltoggle, setCltoggle] = useState(false)
  const [openham, setOpenham] = useState(false)
  
  const changeNavbarColor = () =>{
     if(window.scrollY >= 10){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  const click = () => {
    setCstyle(!cstyle)
    setColorchange(!colorChange)
  }
  const clsection =()=>{
    setCltoggle(!cltoggle)
  }

  const signOut =() => {
    dispatch(signOutUserStart()); 
};

  const handleSearch = () => {

    setSearch(!search)
  }
  const handleham = (e) =>{
    setOpenham(!openham)
    e.stopPropagation();
  }


  return (
    <div className='header_mobilew_sec'>
      <div className={colorChange? 'header_mobilev_sec_bg_trans' : 'header_mobilev_sec_bg_trans'}>
        <div className={colorChange?'header_mobilev_sec_hamburger_trans':'header_mobilev_sec_hamburger_trans'}>
            {/* <BurgerButton click={click} cstyle={cstyle} colorChange={colorChange}/>  */}
            <div onClick={()=>handleham()}><BiMenu /></div>
            {openham?<div className='headerMobile_sidenavbar'>
                <SideHeaderNav handleham={handleham}/>
            </div>:''}
        </div>
        <div className={colorChange?'header_mobilev_sec_logo_trans':'header_mobilev_sec_logo_trans'}>
            <Link to="/">
              <img src='https://i.postimg.cc/D0Fx09R9/logo-large.png' alt ='aasd'/>
            </Link> 
        </div>
        <div className={colorChange?'header_mobilev_sec_icons_trans':'header_mobilev_sec_icons_trans'}>
            <div className='header_mobilev_sec_icons_search' onClick={()=>handleSearch()}>
              <BiSearch />
            </div>
            <Link to="/cart">
            <div className='header_mobilev_sec_icons_search'>
              <BiCart />
              <div className='header_mobilev_sec_icons_items'>
            {totalNumCartItems}
            </div>
            </div>
            </Link>
        </div>
      </div>
      {search && <motion.div  initial="exit" animate="enter" exit="exit" variants={backVariants}
                    className='search_section_header'>
                  <Search handleSearch={handleSearch}/>
            </motion.div>}
    </div>
  )
}

export default Headermobilew