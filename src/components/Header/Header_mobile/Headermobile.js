import React,{useState} from 'react'
import './styles.scss'
import BurgerButton from '../../Comp/BurgerButton/BurgerButton'
import unnamed from '../../../necfiles/unnamed.png'
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import { BiClipboard } from "react-icons/bi";
import { BiUser } from "react-icons/bi";

import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


function Headermobile() {
  const [cstyle, setCstyle] = useState(false);
  const [cltoggle, setCltoggle] = useState(false)

  const click = () => {
      setCstyle(!cstyle)
  }

  const clsection =()=>{
    setCltoggle(!cltoggle)
  }

  return (
    <div className='header_mobile_comp'>
      <div className={cstyle?'header_mobile_back_black':'header_mobile_back_white'}>
          <div className='header_mobile_comp_layout'>
            <div  className='header_mobile_comp_left'>
              <div onClick = {click} className='header_mobile_burger'>
              <BurgerButton /> 
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
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            kurta sets & Kurtas
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            Sherwanis
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            Nehru jackets & sets
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            Bandhgalas
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            shirts
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            Trousers
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            suits
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    <div className='header_side_nav_layout_element_men_elements'>
                        <div className='header_side_nav_layout_element_name'>
                            bandis
                        </div>
                        <div className='header_side_nav_layout_element_icon'>
                                      <MdKeyboardArrowRight />
                        </div>
                    </div>
                    {/* <div className='header_side_nav_layout_element_men_image'>
                      <img src='https://cdn-vzn.yottaa.net/5e18d625d9314057054ee33e/www.ralphlauren.com/v~4b.46/on/demandware.static/-/Sites-siteCatalog_RalphLauren/default/dwff19e0e9/Flyout/202204/20220412-flyouts/0412_polo_earth_m_flyout_mobile_na.jpg?yocs=1_' alt='asda' />
                    </div> */}
                        
                    </div>
                    <div className='header_side_nav_layout_element'>
                      <div className='header_side_nav_white_layout'>
                        <div onClick={clsection} className='header_side_nav_white_layout_bg'>
                          <div className='header_side_nav_layout_element_name'>
                                men
                            </div>
                            <div className='header_side_nav_layout_element_icon'>
                                <MdKeyboardArrowRight />
                            </div>
                        </div>
                        <div className='header_side_nav_white_layout_bg'>
                          <div className='header_side_nav_layout_element_name'>
                                Appointment
                            </div>
                            <div className='header_side_nav_layout_element_icon'>
                                <MdKeyboardArrowRight />
                            </div>
                        </div>
                        <div className='header_side_nav_white_layout_bg'>
                          <div className='header_side_nav_layout_element_name'>
                                Drop
                            </div>
                            <div className='header_side_nav_layout_element_icon'>
                                <MdKeyboardArrowRight />
                            </div>
                        </div>
                        <div className='header_side_nav_white_layout_bg'>
                          <div className='header_side_nav_layout_element_name'>
                                Sale
                            </div>
                            <div className='header_side_nav_layout_element_icon'>
                                <MdKeyboardArrowRight />
                            </div>
                        </div>
                        <div className='header_side_nav_white_layout_bg'>
                          <div className='header_side_nav_layout_element_name'>
                                Customise
                            </div>
                            <div className='header_side_nav_layout_element_icon'>
                                <MdKeyboardArrowRight />
                            </div>
                        </div>
                        
                      </div>
                      <div className='header_side_nav_blue_layout'>
                        
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
                <img src={unnamed} alt ='aasd'/>
            </div>
            
            <div className={cstyle?'header_mobile_comp_right_black':'header_mobile_comp_right'}>
              <div className='header_mobile_comp_icon'>
                    <BiSearch />
              </div>
              <div className='header_mobile_comp_icon'>
                  <BiCart />
              </div>
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default Headermobile