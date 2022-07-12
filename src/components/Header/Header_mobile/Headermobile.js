import React,{useState} from 'react'
import './headermobile.scss'
import BurgerButton from '../../Comp/BurgerButton/BurgerButton'
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import { BiClipboard } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import {Link, NavLink} from 'react-router-dom'
import {signOutUserStart} from '../../../redux/User/user.actions'
import  {useSelector,useDispatch} from 'react-redux'  
import { selectCartItemsCount} from './../../../redux/Cart/cart.selector'
import Search from '../../../Pages/Search/Search';
import { motion } from "framer-motion"
import { useEffect } from 'react';

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


function Headermobile() {
  // const history = useHistory();
  const dispatch = useDispatch()
  const {currentUser,totalNumCartItems} = useSelector(mapState)
  const [search, setSearch] = useState(false)
  const [cstyle, setCstyle] = useState(false);
  const [cltoggle, setCltoggle] = useState(false)
  // const [bgchange, setBgchange] = useState(false)

  // const changeBackground = () => {
  //   if (window.scrollY >= 30) {
  //     setBgchange(true);
  //   }
  //   else {
  //     setBgchange(false)
  //   }
  // }

  // window.addEventListener('scroll', changeBackground);

  const click = () => {
    setCstyle(!cstyle)
    setCltoggle(true)  
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

  

  return (
    <div className='header_mobile_comp'>
      <div className={cstyle?'header_mobile_back_black':'header_mobile_back_white'}>
        
          <div className='header_mobile_comp_layout'>
            <div  className='header_mobile_comp_left'>
              <div onClick = {click} className='header_mobile_burger'>
                <BurgerButton click={click} cstyle={cstyle}/> 
              </div>
              <div className='header_side_nav_layout'>
                <div className={cstyle?'header_side_nav':'header_side_nava'}>

                <div className={cltoggle?'header_side_nav_layout_element_men_hide':'header_side_nav_layout_element_men'}>
                    <div onClick={clsection} className='header_side_nav_layout_element_men_heading'>
                        <div  className='header_side_nav_layout_element_icon'>
                                      {/* <MdKeyboardArrowRight /> */}
                        </div>
                        <div className='header_side_nav_layout_element_name'>
                            men
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowLeft />
                        </div>
                    </div>
                    <Link to = '/search/dress/kurtas'>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            Kurtas
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    </Link>
                    <Link to = '/search/dress/kurtasets'>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            Kurta sets 
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    </Link>
                    <Link to = '/search/dress/sherwani'>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            Sherwanis
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    </Link>
                    {/* <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            Nehru jackets & sets
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div> */}
                    <Link to = '/search/dress/bandhagala'>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            Bandhgalas
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    </Link>
                    <Link to = '/search/dress/shirt'>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            shirts
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    </Link>
                    <Link to = '/search/dress/trouser'>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            Trousers
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    </Link>
                    <Link to = '/search/dress/suit'>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            suits
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    </Link>
                    <Link to = '/search/dress/bandis'>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            bandis
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    </Link>
                    <div className='header_side_nav_layout_element_men_elements'>
            
                          <div className='header_side_nav_layout_element_men_elements_img'>
                              <img src='https://cdn-vzn.yottaa.net/5e18d625d9314057054ee33e/www.ralphlauren.com/v~4b.46/on/demandware.static/-/Sites-siteCatalog_RalphLauren/default/dwff19e0e9/Flyout/202204/20220412-flyouts/0412_polo_earth_m_flyout_mobile_na.jpg?yocs=1_' />
                          </div>
                           
                    </div>
                  
                    
                   
                    
                        
                    </div>
                    <div className='header_side_nav_layout_element'>
                      <div className='header_side_nav_white_layout'>
                        <div className='header_side_nav_white_layout_bg'>
                          <div className='header_side_nav_layout_element_name'>
                              <Link onClick = {click}  to='/register'>
                                {currentUser&&
                                   <div> 
                                      <span onClick={() => signOut()}>
                                          Sign Out
                                      </span>
                                   </div>}
                                {!currentUser&&
                                  <div>
                                     <Link to="/register">
                                        Register/Signin
                                    </Link>
                                  </div>
                                }
                              </Link>
                               
                            </div>
                            <div className='header_side_nav_layout_element_icon'>
                                <MdKeyboardArrowRight />
                            </div>
                        </div>
                        <div onClick={clsection} className='header_side_nav_white_layout_bg'>
                          <div className='header_side_nav_layout_element_name'>
                                men
                            </div>
                            <div className='header_side_nav_layout_element_icon'>
                                <MdKeyboardArrowRight />
                            </div>
                        </div>
                        <Link to = '/appointment'>
                          <div className='header_side_nav_white_layout_bg'>
                              <div className='header_side_nav_layout_element_name'>
                                  Appointment
                              </div>
                      
                              <div className='header_side_nav_layout_element_icon'>
                                  <MdKeyboardArrowRight />
                              </div>
                        </div>
                        </Link>
                        <Link to='/dropdesign'>
                          <div className='header_side_nav_white_layout_bg'>
                          
                              <div className='header_side_nav_layout_element_name'>
                                  Drop
                              </div>
                              <div className='header_side_nav_layout_element_icon'>
                                  <MdKeyboardArrowRight />
                              </div>
                          </div>
                        </Link>
                        <div className='header_side_nav_white_layout_bg'>
                          <div className='header_side_nav_layout_element_name'>
                                Sale
                            </div>
                            <div className='header_side_nav_layout_element_icon'>
                                <MdKeyboardArrowRight />
                            </div>
                        </div>
                        <div className='header_side_nav_white_layout_bg'>
                          {/* <div className='header_side_nav_layout_element_name'>
                                Customise
                            </div>
                            <div className='header_side_nav_layout_element_icon'>
                                <MdKeyboardArrowRight />
                            </div> */}
                        </div>
                        
                        
                      </div>
                      <div className='header_side_nav_blue_layout'>

                      <Link to = '/wishlist'>
                        <div className='header_side_nav_blue_layout_bg'>
                          <div className='header_side_nav_blue_layout_element'>
                              <div className='header_side_nav_blue_layout_element_icon' >
                                  <BiHeart />
                              </div>
                              <div>
                                wishlist
                              </div>
                          </div>
                          <div className='header_side_nav_layout_element_icon'>
                              <MdKeyboardArrowRight />
                          </div>
                        </div>
                        </Link>
                        <Link to = '/dashboard'>
                            <div className='header_side_nav_blue_layout_bg'>
                              <div className='header_side_nav_blue_layout_element'>
                                  <div className='header_side_nav_blue_layout_element_icon' >
                                      <BiUser />
                                  </div>
                                  <div>
                                    Account
                                  </div>
                              </div>
                              <div className='header_side_nav_layout_element_icon'>
                                  <MdKeyboardArrowRight />
                              </div>
                            </div>
                        </Link>
                        <div className='header_side_nav_blue_layout_bg'>
                          <div className='header_side_nav_blue_layout_element'>
                              <div className='header_side_nav_blue_layout_element_icon' >
                                  <BiChat />
                              </div>
                              <div>
                                Contact
                              </div>
                          </div>
                          <div className='header_side_nav_layout_element_icon'>
                              <MdKeyboardArrowRight />
                          </div>
                        </div>
                        <div className='header_side_nav_blue_layout_bg'>
                          <div className='header_side_nav_blue_layout_element'>
                              <div className='header_side_nav_blue_layout_element_icon' >
                                  <BiClipboard />
                              </div>
                              <div>
                                about us
                              </div>
                          </div>
                          <div className='header_side_nav_layout_element_icon'>
                              <MdKeyboardArrowRight />
                          </div>
                        </div>
                       
                        
                      </div>
                    </div>
                    
                </div>
              </div>
            </div>
             
            <div className={cstyle?'header_mobile_comp_logo_black':'header_mobile_comp_logo'}>
                
            <Link to="/">
            <img src='https://i.postimg.cc/D0Fx09R9/logo-large.png' alt ='aasd'/>
                </Link>
            </div>
            
            <div className={cstyle?'header_mobile_comp_right_black':'header_mobile_comp_right'}>
              <div className='header_mobile_comp_icon' onClick={()=>handleSearch()}>
                    <BiSearch />
              </div>
           
              <Link to="/cart">
              <div className='header_mobile_comp_icon'>
                  <BiCart /> 
                  <div className='header_cart_circle'>
                    {totalNumCartItems}
                  </div>
              </div>
              </Link>
          
            </div>
           
            {search && <motion.div  initial="exit" animate="enter" exit="exit" variants={backVariants}
                    className='search_section_header'>
                  <Search handleSearch={handleSearch}/>
            </motion.div>}
            
          </div>
      </div>
      
    </div>
  )
}

export default Headermobile