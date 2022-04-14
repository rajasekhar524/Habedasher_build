import React,{useState,useEffect} from 'react'
import './styles.scss'

import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import unnamed from '../../necfiles/unnamed.png'
import Header_mobile from './Header_mobile/Headermobile'


function Header() {
  const [hover, setHover] = useState(false);
  const [navbar, setNavbar] = useState(false)
  
  const onHover = () => {
    setHover(!hover)
  }

  const changeHeaderBg = () => {
    // console.log(window.scrollY)
    if(window.scrollY >=80 ){
      // console.log(window.scrollY)
        setNavbar(true)
        // console.log(navbar)
    } else {
        setNavbar(false)
        // console.log(window.scrollY)
        // console.log(navbar)
    }
  }

  window.addEventListener('scroll', changeHeaderBg)

  return (
    <div className='header'>

      <div className='header_mobile'>
          <Header_mobile />
      </div>

      <div className={navbar?'header_pc_black':'header_pc'}>

          <div className='header_logo'>
                <img src={unnamed} alt='asdd' />
          </div>

          <div className='header_middle'>

              <div className='header_element'>
                <a>
                  men
                </a>
                  <div className='sub_hover'>
                    <div className='sub_hover_section'>
                        <div className='sub_hover_section_one'>
                              <img src='https://cdn-vzn.yottaa.net/5e18d625d9314057054ee33e/www.ralphlauren.com/v~4b.45/on/demandware.static/-/Sites-siteCatalog_RalphLauren/default/dwe7c435fa/Flyout/202204/20220412-flyouts/0412_polo_earth_m_flyout_desktop_na.jpg?yocs=1_' />
                          </div>
                          <div className='sub_hover_section_two'>
                              <div className='sub_hover_section_two_flex'>
                                <div className='sub_hover_section_two_one'>
                                      <div className='sub_hover_section_section_heading'>
                                          Create your own   
                                      </div>
                                      <div className='sub_hover_section_section_elements'>
                                          Shirts
                                      </div>
                                      <div className='sub_hover_section_section_elements'>
                                          Trousers 
                                      </div>
                                      <div className='sub_hover_section_section_elements'>
                                          Suits
                                      </div>
                                      <div className='sub_hover_section_section_elements'>
                                         Bomber Jackets
                                      </div>
                                      <div className='sub_hover_section_section_elements'>
                                          Kurtas
                                      </div>
                                    
                                </div>
                                <div className='sub_hover_section_two_two'>
                                    <div className='sub_hover_section_two_one'>
                                        <div className='sub_hover_section_section_heading'>
                                            What's New
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            New arrivals
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Trending Now
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Best Choice 
                                        </div>
                                        
                                    </div>
                                </div>
                              </div>
                          </div>
                          <div className='sub_hover_section_three'>
                                    <div className='sub_hover_section_two_one'>
                                        <div className='sub_hover_section_section_heading'>
                                            Clothing
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Kurta Sets & Kurtas
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Sherwanis
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Nehru Jacket & Sets
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Bandhgalas
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Shirts
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Trousers and Trousers
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Sherwani  
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Suits 
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Bandis
                                        </div>
                                    </div>
                          </div>
                          <div className='sub_hover_section_four'>
                            <div className='sub_hover_section_two_flex'>
                                  <div className='sub_hover_section_two_one'>
                                        <div className='sub_hover_section_section_heading'>
                                        Accessories   
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Hats & Scarves
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Belts & Suspenders
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Bags
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Wallets & Accessories
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Ties & Bow Tie 
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Pocket Squares
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Socks
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Fragrance
                                        </div>
                                      
                                  </div>
                                  <div className='sub_hover_section_two_two'>
                                      <div className='sub_hover_section_two_one'>
                                          <div className='sub_hover_section_section_heading'>
                                              Sale
                                          </div>
                                          <div className='sub_hover_section_section_elements'>
                                            Clothing
                                          </div>
                                          <div className='sub_hover_section_section_elements'>
                                              Shoes
                                          </div>
                                          <div className='sub_hover_section_section_elements'>
                                              Accessories 
                                          </div>
                                          
                                      </div>
                                  </div>
                                </div>
                          </div>
                          <div className='sub_hover_section_five'>
                          <div className='sub_hover_section_two_flex'>
                                  <div className='sub_hover_section_two_one'>
                                        <div className='sub_hover_section_section_heading'>
                                            Shoes & Monks
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Custom juthis
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                           Boots and Bolts
                                        </div>
                                      
                                  </div>
                                  <div className='sub_hover_section_two_two'>
                                      <div className='sub_hover_section_two_one'>
                                      <div className='sub_hover_section_section_heading'>
                                            Contact
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Drop Design
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Appointment 
                                        </div>
                                        <div className='sub_hover_section_section_elements'>
                                            Call or Message
                                        </div>
                                          
                                      </div>
                                  </div>
                                </div>
                          </div>
                    </div>
                      
                  </div>
              </div>

              {/* <div className='header_element'>
                <a>
                  women
                </a>
              </div> */}
              <div className='header_element'>
                  <a>
                  Appointment
                  </a>
                  
              </div>
              <div className='header_element'>
                  <a>
                  Drop
                  </a>
               
              </div>
              <div className='header_element'>
                  <a>
                  Sale
                  </a>
               
              </div>
              <div className='header_element'>
                  <a>
                    Customise
                  </a>
                
              </div>
          </div>


          <div className='header_right' >
            {/* <AddLocationIcon /> */}
            <div className='header_icon'>
              <BiSearch />
            </div>
            <div className='header_icon_club' onMouseEnter={onHover} onMouseLeave={onHover}>
              {/* <box-icon size="1.1rem" name='heart' type={hover?'solid':'regular'} color="black"></box-icon> */}
              <div className='header_icon_regular'>
              <BiHeart />
              </div>
              <div className='header_icon_solid'>
                <BiHeart />
              </div>
            </div>
            <div className='header_icon' >
              {/* <box-icon onMouseEnter={onHover} onMouseLeave={onHover} size="1.1rem" name='user' type={hover?'solid':'regular'} color="black"></box-icon> */}
              <BiUser />
            </div>
            <div className='header_icon'>
            <BiCart />
            </div>
          </div>
      </div>

    </div>  
  )
}

export default Header