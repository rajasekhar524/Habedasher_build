import React,{useState,useEffect} from 'react'
import './mainpage.scss'

import { motion } from "framer-motion"
import {trackWindowScroll} from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import BlueButton from '../../components/BlueButton/BlueButton';
import { Link } from 'react-router-dom';
const MainCarousel = React.lazy(() => import('../../components/Comp/MainCarousel/MainCarousel'))
// import 'style-loader!css-loader!react-lazy-load-image-component/src/effects/blur.css';
// import 'style-loader!css-loader!react-lazy-load-image-component/src/effects/black-and-white.css';
// import 'style-loader!css-loader!react-lazy-load-image-component/src/effects/opacity.css';



const transition = {
    duration: 0.3,
    ease: [0.23, 0.13, 0.53, 0.96],
    when:"beforeChildren",
    staggerChildren:2
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
    hidden: { y: 0.06, opacity: 0 },
    visible: { y: 0, opacity: 1,
        transition: { 
        delay: 0,
        duration: 0.2,
        ease: [0.23, 0.13, 0.53, 0.96],
        // mass:0.4,
        // damping:0.8,
        // when:"afterChildren",
        // staggerChildren:0.4
     }}
  };

  const childvariants = {
    hidden: {
        opacity:0
    },
    visible: {
        opacity:1,
        delay: 0
    }
}
function Mainpage() {
    const dispatch = useDispatch();

    const wallet = '1000'

    // useEffect (()=>{
    //     dispatch(getUserWalletHistory('O2DduGISIrVAY4JViYGi1WU9b102'))
    // },[])
    // useEffect (()=>{
    //     dispatch(saveWalletHistory({wallet}))
    // },[])

    // useEffect (()=>{
    //     dispatch(updateWalletHistory({wallet}))
    // },[])
    

    const handlewallet = () =>{

    }
 
    
    
  return (
     

    <motion.div initial="hidden"  animate="visible" variants={backVariants} className='mainpage'>
          <motion.div variants={childvariants} className='mainpage_firstsection'>
                <MainCarousel 
                    // image1='https://cdn-vzn.yottaa.net/5e18d625d9314057054ee33e/www.ralphlauren.com/v~4b.54/on/demandware.static/-/Sites-RalphLauren_US-Library/en_US/v1655460410376/img/202206/20220614-homepage/0614_hp_m_c01a_img.jpg?yocs=1_'
                    image1='https://i.postimg.cc/J15CmT8N/0-Z9-A7506-1.webp'

                    image2='https://i.postimg.cc/mbsW-0vvZ/0-Z9-A7378-2.webp'
                    image3='https://i.postimg.cc/y79zp1rr/0Z9A7424.webp'
                    image4='https://i.postimg.cc/y6jBjhqK/_Z9A1332.jpg'
                   
                    cslidesPerView='1'
                    fourslidesPerView='1'
                    sevenslidesPerView='1'
                    oneslidesPerView='1'
                    oneSpacebetween='30'
                    section='first'
                    effect='fade'
                    pagination= {false}
                    autoplay={true}
                />
          </motion.div>

        <div className='appointment_section'>
            <div className='appointment_section_head'>
                book your appointment today
            </div>
            <div className='appointment_section_para'>
            Find the perfect present or create your personalized look with the help of our staff.
            </div>
            <div>
            <Link to='/appointment'>
                <BlueButton>
                    Book an appointment
                </BlueButton>
            </Link>
            </div>
        </div>
     
        <motion.div variants={childvariants} className='mainpage_secondsection_ng'>
            
                <div className='mainpage_secondsection_bg_ng'>
                <div className='mainpage_secondsection_title_you_noon'>
                       {/* Good Afternoon ! */}
                </div>
                <div className='mainpage_secondsection_title_you'>
                       For You
                </div>
                <div className='mainpage_secondsection_title_ng'>
                       Recommendations to fit your personal style
                </div>
                <div className='mainpage_secondsection_bgg_ng'>
                <MainCarousel 
                    image1='https://i.postimg.cc/XnTJ2R34/0Z9A7550.webp'
                    image2='https://i.postimg.cc/4fG3Gpm0/0Z9A7334.webp'
                    image3='https://i.postimg.cc/L9b2XWDn/0Z9A7376.webp'
                    image4='https://i.postimg.cc/ZqZrJLCn/_Z9A1108.jpg'
                    image5='https://i.postimg.cc/xQx0tkQn/0Z9A7460.webp'
                    cslidesPerView='2'
                    fourslidesPerView='2'
                    sevenslidesPerView='2'
                    oneslidesPerView='1'
                    oneSpacebetween={130}
                    section='second_ng'
                    pagination={false}
                    autoplay={false}
                    // width='600px'
                    
            />
                </div>
                
                </div>
                
            </motion.div>
            <div className='margin_bottom_mainpage'>
            </div>  

            <motion.div variants={childvariants} className='mainpage_secondsection'>
            
                <div className='mainpage_secondsection_bg'>
                <div className='mainpage_secondsection_title'>
                        {/* seasonal changes */}
                </div>
                <div className='mainpage_secondsection_bgg'>
                <MainCarousel 
                    image1='https://i.postimg.cc/TTrJCBHm/0Z9A7378.webp'
                    image2='https://i.postimg.cc/nn81KnTp/0Z9A7388.webp'
                    image3='https://i.postimg.cc/bzpHMLK5/0Z9A7506.webp'
                    image4='https://i.postimg.cc/vYKtTnmL/0Z9A7524.webp'
                    image5='https://i.postimg.cc/SmfgfVdg/0Z9A7483.webp'
                    cslidesPerView='1'
                    fourslidesPerView='1'
                    sevenslidesPerView='1'
                    oneslidesPerView='1'
                    oneSpacebetween={30}
                    section='second'
                    pag={true}
                    autoplay={true}
                    
            />
                </div>
                
                </div>
                
            </motion.div>
            <br />
            <motion.div variants={childvariants} className='mainpage_threesection'>
            {/* asdad */}
                <div className='mainpage_secondsection_bg'>
                <div className='mainpage_secondsection_title'>
                        {/* seasonal changes */}
                </div>
                <div className='mainpage_secondsection_bgg'>
                <MainCarousel 
                    image1='https://i.postimg.cc/YSR20jcN/Untitled-1.jpg'
                    image2='https://i.postimg.cc/wBpTPf3f/_Z9A1223.jpg'
                    image3='https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/en_US/v1649931241567/img/202203/20220329-homepage-top/0329_hp_c04c_img.jpg'
                    image4=''
                    cslidesPerView='1'
                    fourslidesPerView='1'
                    sevenslidesPerView='1'
                    oneslidesPerView='1'
                    oneSpacebetween={0}
                    section='three'
                    pagination={true}
                    autoplay={false}
            />
                </div>
                
                </div>
                
            </motion.div>
        <br /><br /><br /><br />
        
        
      </motion.div>
  )
}

export default trackWindowScroll(Mainpage)