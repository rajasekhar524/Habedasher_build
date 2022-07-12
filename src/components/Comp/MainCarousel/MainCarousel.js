import React,{ useEffect } from 'react'
import './styles.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import { EffectCreative } from "swiper";
import { EffectFade,Lazy, Pagination, Navigation,EffectCards,Zoom,Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import 'swiper/css';
import MainPagesection1 from './MainPagesection1/MainpageSection1'
import gif from './../../../assets/gif.gif'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
    visible: { opacity: 1, scale: 1, delay:0.3,transition: { duration: 0.5, ease: [0.23, 0.13, 0.53, 0.96], } },
    hidden: { opacity: 0, scale: 1 }
  };




function MainCarousel({zoom,pag,width,autoplay,image1,image2,image3,image4,image5,cslidesPerView,fourslidesPerView,sevenslidesPerView,oneslidesPerView,oneSpacebetween,section,effect}) {
    // console.log(pagination)
    // console.log('image1',image1)
    const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
    return (
    <motion.div  ref={ref}
    animate={controls}
    initial="hidden"
    variants={squareVariants} className='main_corousel'>
        <div className='main_carousel_elements'>
        <Swiper
            grabCursor={true}
            zoom={zoom}
            // loop={true}
            // navigation={true} 
            slidesPerView={cslidesPerView}
            centeredSlides={true}
            autoplay={autoplay}
            // centeredSlidesBounds={true}
            // centerInsufficientSlides={true}
            effect={effect}
            spaceBetween={oneSpacebetween}
            pagination={{
            clickable: pag,
            }}
            
            breakpoints={{
           
            480: {
                slidesPerView: fourslidesPerView,
                spaceBetween: oneSpacebetween,
            },
            768: {
                slidesPerView: sevenslidesPerView,
                spaceBetween: 40,
                width:1000,
            },
            1024: {
                slidesPerView: oneslidesPerView,
                spaceBetween: 50,
                width:1000,   
            },
            }}
            
            modules={[EffectFade,Navigation,Lazy, Pagination,EffectCards,Zoom,Autoplay]}
            className="mySwiper"
      >
         {section && section==='first' && <div className='main_carousel_elements_first'>
                <SwiperSlide>
                    <MainPagesection1
                        img={image1!=null? image1 : gif}
                        text='hd' 
                        section='first'
                        />
                </SwiperSlide>
                <SwiperSlide>
                <MainPagesection1
                        img={image2!=null? image2 : gif}
                        text='hd' 
                        section='first'/>
                </SwiperSlide>
                <SwiperSlide>
                <MainPagesection1
                        img={image3}
                        text='hd'
                        section='first' />
                </SwiperSlide>
                {/* <SwiperSlide>
                    <MainPagesection1
                        img={image4}
                        text='hd' 
                        section='first'/>
                </SwiperSlide> */}
              
                </div>}

                {section && section==='second_ng' && <div className='main_carousel_elements_second'>
                        
                        <SwiperSlide>
                            <MainPagesection1
                                img={image1!=null? image1 : gif}
                                text='suits'
                                section='second_ng' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <MainPagesection1
                                img={image2!=null? image2 : gif}
                                text='kurta set'
                                section='second_ng' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <MainPagesection1
                                img={image3!=null? image3 : gif}
                                text='bandis'
                                section='second_ng' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MainPagesection1
                                img={image4!=null? image4 : gif}
                                text='shirts'
                                section='second_ng' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <MainPagesection1
                                img={image5!=null? image5 : gif}
                                text='sherwanis'
                                section='second_ng' />
                        </SwiperSlide>
                    </div>}

                    {section && section==='second' && <div>
                        <SwiperSlide>
                            <MainPagesection1
                                img={image1!=null? image1 : gif}
                                text='shop'
                                textb='haberdasher  '
                                section='second' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <MainPagesection1
                                img={image2!=null? image2 : gif}
                                text='shop'
                                textb='haberdasher'
                                section='second' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <MainPagesection1
                                img={image3!=null? image3 : gif}
                                text='shop'
                                textb='haberdasher'
                                section='second' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <MainPagesection1
                                img={image4!=null? image4 : gif}
                                text='shop'
                                textb='haberdasher'
                                section='second' />
                        </SwiperSlide>
                        <SwiperSlide>
                        <MainPagesection1
                                img={image5!=null? image5 : gif}
                                text='shop'
                                textb='haberdasher'
                                section='second' />
                        </SwiperSlide>
                    </div>}

                    {section && section==='three' && <div>
                        <SwiperSlide>
                            <MainPagesection1
                                img={image1!=null? image1 : gif}
                                text='what'
                                textone='visit us'
                                texttwo='out favourites'
                                textthree='Exuberate confidence and feel yoour most authentic self in garments tailored to your body with immense care and patience'
                                textfour='address'
                                section='three' />
                        </SwiperSlide>
                        {/* <SwiperSlide>
                        <MainPagesection1
                                img={image2}
                                text='what'
                                textone='Gifts for the Host'
                                texttwo='out favourites'
                                textthree='From elegant crystal glassware to signature Ralph Lauren home scents, there is a perfect present to answer every invitation '
                                textfour='shop now'
                                section='three' />
                        </SwiperSlide> */}
                       
                    </div>}
     
      
        
      </Swiper>
        </div>
    </motion.div>
  )
}

export default MainCarousel