import React,{useState} from 'react'
import './mainpageSection1.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../../../Button/Button'
import 'react-lazy-load-image-component/src/effects/blur.css';
import "swiper/css/zoom";
import { Swiper, SwiperSlide } from "swiper/react";
import BlueButton from '../../../BlueButton/BlueButton';
import {trackWindowScroll} from 'react-lazy-load-image-component';
import { motion } from "framer-motion"
import gif from '../../../../assets/gif.gif'
// import 'style-loader!css-loader!react-lazy-load-image-component/src/effects/blur.css';
// import 'style-loader!css-loader!react-lazy-load-image-component/src/effects/black-and-white.css';
// import 'style-loader!css-loader!react-lazy-load-image-component/src/effects/opacity.css';
const transition = {
    duration: 0.3,
    ease: [0.23, 0.13, 0.53, 0.96],
    staggerChildren: 0.5
  };
  
  // const imageVariants = {
  //   exit: { y: "50%", opacity: 0, transition },
  //   enter: {
  //     y: "0%",
  //     opacity: 1,
  //     transition
  //   }
  // };
  
  const backVariants = {
    exit: { y: 0.1, opacity: 0.2, transition },
    enter: { y: 0, opacity: 1, transition: { delay: 0, ...transition }}
  };
  

function MainpageSection1({img,text,textb,textone,texttwo,textthree,textfour,section}) {

    const [loadimage, setLoadimage] = useState(true)

    function hadnelconsole () {
        // setLoadimage(!loadimage)
    }
    const scrollPosition = {
        'x':0,
        'y':0
    }
  return (
      
    <div className='swiper_image'>
       {section==='first' && 
                    <div className='swiper_image_url'>
                        <div  className="swiper-zoom-container">
                        {/* <img src={img} className="swiper-lazy"/> */}
                        <LazyLoadImage
                                alt='asdad'
                                height='300'
                                src={loadimage?img:gif} // use normal <img> attributes as props
                                width='400'
                                beforeLoad={hadnelconsole}
                                // effect='blur'
                                 />
                                 
                                </div>
                    </div> }
        {section==='second_ng' && 
                <div className='swiper_image_url_second_section_ng'>
                    <div className='swiper_image_url_second_ng'>
                        {/* <img src={img} className="swiper-lazy"/> */}
                        <LazyLoadImage
                                alt='asdad'
                                height='300'
                                src={loadimage?img:gif} // use normal <img> attributes as props
                                width='400'
                                beforeLoad={hadnelconsole}
                                // effect='blur'
                                 />
                        </div>
                    <div className='swiper_image_text_section_ng'>
                           {/* adasd */}       
                    
                        <div className='swiper_image_text_ng'>
                        {text}
                        </div>
                        <div className='swiper_image_text_ng_shop'>
                       shop now
                        </div> 
                    </div>
                </div> 
        }

        {section==='second' && 
                <div className='swiper_image_url_second_section'>
                    <div className='swiper_image_url_second'>
                        <img src={img} className="swiper-lazy"/>
                    </div>
                    <div className='swiper_image_text_section'>
                           {/* adasd */}
                           
                        <div className='swiper_image_text'>
                        {text}
                        </div>
                        <div className='swiper_image_text2'>
                        {textb}
                        </div>
                    
                    </div>
                </div> 
        }

        {section==='three' && 
                <div className='main_image_section_three'>
                    <div className='main_image_section_three_img'>
                        <img src={img} />
                    </div>
                    <div className='main_image_section_three_text'>
                        <div className='main_image_section_three_text_flex'>
                            <div className='main_image_section_three_small'>
                                {textone}
                            </div>
                            <div className='main_image_section_three_cursive'>
                                {/* {texttwo} */}
                            </div >
                            <div className='main_image_section_three_desc'>
                                {textthree}
                            </div>
                            <div className='main_image_section_three_btn'>
                             <a href='https://goo.gl/maps/qtNQKvtPd4z9NLsj6'> {textfour}</a>
                            </div>
                        </div>
                    </div>
                </div>
        }
                    
                 
    </div>
  )
}

export default trackWindowScroll(MainpageSection1)