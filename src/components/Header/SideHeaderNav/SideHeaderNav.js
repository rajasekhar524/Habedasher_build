import React,{useState} from 'react'
import './sideHeaderNav.scss'
import { GiCrossedBones,GiDeerHead,GiChainedArrowHeads,GiDwarfFace } from "react-icons/gi";
import { Link } from 'react-router-dom';
import  {useSelector,useDispatch} from 'react-redux'  
import { selectCartItemsCount} from './../../../redux/Cart/cart.selector'
import Wallet from '../../Comp/Wallet/Wallet';
import { signOutUserStart } from '../../../redux/User/user.actions';
import { motion } from "framer-motion"

const mapState = (state) => ({
    currentUser:state.user.currentUser,
    totalNumCartItems:selectCartItemsCount(state),
    // totalNumWishlistItems:selectWishlistItemsCount(state)
    
  });

  const sidemotion = {
    hidden: {
        opacity:0,
        // x:-100
    },
    visible: {
        opacity:1,
        x:0,
        // delay: 2,
        mass:0.4,
        damping:0.8,
        when:"afterChildren",
        staggerChildren:0.4,
        transition: { duration: 0.1, ease: [0.23, 0.13, 0.53, 0.96], }
    },
    exit:{
        opacity:0,
        delay: 2
    }
  }

  const childmotion = {
    hidden: {
        opacity:0,
        // x:-100
    },
    visible: {
        opacity:1,
        x:0,
        delay: 2,
        transition: { duration: 0.8, ease: [0.23, 0.13, 0.53, 0.96], }
    },
    exit:{
        opacity:0,
        delay: 2
    }
  }
function SideHeaderNav({handleham}) {
    const dispatch = useDispatch()
    const [catarr, setCatarr] = useState([{item:'blazer',link:'blazer'},{item:'shirt',link:'shirt'},{item:'sherwani',link:'sherwani'},{item:'sherwani set',link:'sherwaniset'},{item:'bandi kurta set',link:'bandikurtaset'},{item:'kurta',link:'kurta'},{item:'kurtaset',link:'kurtaset'},{item:'suits',link:'suits'},{item:'bandhgla',link:'bandhgla'},{item:'trousers',link:'trouser'},{item:'bandhgla set',link:'bandhglaset'},{item:'bandi',link:'bandi'}])
    const [bluarr, setBluarr] = useState(['Wishlist','Contact us','Appointment',"Orders"])
    const {currentUser,totalNumCartItems} = useSelector(mapState)
    const handleclick = () => {
        // console.log('asdadead')
    }
    const signOut =() => {
        dispatch(signOutUserStart()); 
    };
  return (
    <motion.div variants={sidemotion} initial="hidden" exit="exit" animate="visible"  className='SideHeaderNav_sec' onClick={handleham}>
        <div className='SideHeaderNav_sec_wrap' onClick={handleclick()}>
            <div className='SideHeaderNav_logo'>
                {/* <div><GiDeerHead /></div> */}
                <img src='https://i.postimg.cc/D0Fx09R9/logo-large.png' alt ='aasd'/>
                <div onClick={handleham}><GiCrossedBones /></div>
            </div>
            <div className='SideHeaderNav_sections'>
            <Link to ='/register'>
                 <div className='SideHeaderNav_sections_header'>
                    {!currentUser? <div className='SideHeaderNav_sections_layout' ><div className='SideHeaderNav_sections_icon'>
                       <GiDwarfFace />  
                        </div> 
                        <div>Sign in / register</div>
                        </div>:`Hi, ${currentUser.displayName}` }
                       
                </div>
            </Link>

                    <div className='SideHeaderNav_links_wrap'>
                           {catarr.map((cat)=>{
                               return(
                                <Link to={`/search/dress/${cat.link}`} >
                                    <motion.div  variants={childmotion} initial="hidden" exit="exit" animate="visible" className='SideHeaderNav_links_wrap_sec'>
                                        <div className='SideHeaderNav_links_wrap_link'>
                                                {cat.item}
                                        </div>
                                        <div className='SideHeaderNav_links_wrap_icon'>
                                                <GiChainedArrowHeads />
                                        </div>
                                    </motion.div>
                                </Link>
                               )
                           })} 

                           <br />
                    </div>
                    <div className='wallet_sideheader'><Wallet /></div>
                    <div className='SideHeaderNav_twosection'>
                    {bluarr.map((blu)=>{
                               return(
                                <Link to={`/${blu}`} >
                                <div className='SideHeaderNav_links_wrap_sec_wh'>
                                    <div className='SideHeaderNav_links_wrap_link_wh'>
                                            {blu}
                                    </div>
                                    <div className='SideHeaderNav_links_wrap_icon_wh'>
                                            {/* <GiChainedArrowHeads /> */}
                                    </div>
                                </div>
                                </Link>
                               
                               )
                           })}
                     
                    </div>
                  
                    {currentUser?<div className='SideHeaderNav_sections_header' onClick={()=>signOut()}>signout</div>:''}
            </div>    
        </div>
        
    </motion.div>
  )
}

export default SideHeaderNav