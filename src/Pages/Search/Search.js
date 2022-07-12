import React,{useState} from 'react'
import './search.scss'
import { Link } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { motion } from "framer-motion"
import { AiOutlineClose } from "react-icons/ai";


const transition = {
    duration: 0.2,
    ease: [0.23, 0.13, 0.53, 0.96]
  };
  
  // const imageVariants = {
  //   exit: { y: "50%", opacity: 0, transition },
  //   enter: {
  //     y: "0%",
  //     opacity: 1,
  //     transition
  //   }
  // };
  
//   const backVariants = {
//     exit: { x: 0,y:300, opacity: 0.2, transition },
//     enter: { x:0,y:0, opacity: 1, transition: { delay: 0, ...transition }}
//   };
const sidemotion = {
    hidden: {
        opacity:0,
        y:0.6
    },
    visible: {
        opacity:1,
        y:0,
        delay: 2,
        duration: 0.9,
        ease: [0.23, 0.13, 0.53, 0.96],
    },
   
  }


function Search({handleSearch}) {
    const [links, setLinks] = useState(['shirt','sherwani','kurta','kurtaset','suits','bandhagala','trouser','bandis'])
    const [cats, setCats] = useState([{image:'https://media.istockphoto.com/photos/confident-manager-suitable-in-current-circumstances-masculinity-picture-id1282101313?b=1&k=20&m=1282101313&s=170667a&w=0&h=23bIqSQn-Vk6f9ciOTHkx1jo8DGf9bqxke17HWj4eA0=',name:'Casual shirts'},
                                      {image:'https://media.istockphoto.com/photos/confident-manager-suitable-in-current-circumstances-masculinity-picture-id1282101313?b=1&k=20&m=1282101313&s=170667a&w=0&h=23bIqSQn-Vk6f9ciOTHkx1jo8DGf9bqxke17HWj4eA0=',name:'Dresses'},
                                      {image:'https://media.istockphoto.com/photos/confident-manager-suitable-in-current-circumstances-masculinity-picture-id1282101313?b=1&k=20&m=1282101313&s=170667a&w=0&h=23bIqSQn-Vk6f9ciOTHkx1jo8DGf9bqxke17HWj4eA0=',name:'Sweat shirts'},
                                      {image:'https://media.istockphoto.com/photos/confident-manager-suitable-in-current-circumstances-masculinity-picture-id1282101313?b=1&k=20&m=1282101313&s=170667a&w=0&h=23bIqSQn-Vk6f9ciOTHkx1jo8DGf9bqxke17HWj4eA0=',name:'Suits'}])
    const [searchitems, setSearchitems] = useState(['shirt','trouser','sherwani','kurta','bandhgala','bandi'])
    const [searchterm,setSearchterm] = useState('')
    const [item,setItem] = useState(true)
    for(let cat in cats){
        console.log(cat)
    }

    const searchhandle = (event ) => {
        setSearchterm(event.target.value)
        setItem(true)
        
    }
    return (
    <motion.div variants={sidemotion} initial="hidden" animate="visible"  className='search_style_sec'>
        <div className='search_input'>
            <input type='text'  onChange={(event)=>{searchhandle(event)}} placeholder='   Search The Haberdasher'/>
            
            <div className='send_icon' onClick={()=>handleSearch()}>
                < AiOutlineClose/>
            </div>
        </div>
        {item?<div><div className='search_folder'>
                {searchitems.filter((val)=>{
                        if(searchterm == "") {
                            setItem(false)
                        } else if(val.toLowerCase().includes(searchterm.toLowerCase())) {
                            return val
                        }
                }).map((val,key)=>{
                    return(
                    <Link to={`/search/dress/${val}`}>
                        <div className='seaerch_folder_item' key ={key} onClick={()=>handleSearch()}>
                            {val}
                        </div>
                    </Link>
                    )
                })}
            </div></div>:
                <div>
                    <div className='Suggested_Search'>
                    Suggested Search :
                    </div>
                    
                    {links.map((link)=>{
                        return (
                            <Link to = {`/search/dress/${link}`}  >
                                <div className='search_shortcuts' onClick={()=>handleSearch()} >
                                    <div className='search_shortcuts_icon'>
                                        <BiSearch />
                                    </div>
                                    <div className='search_shortcuts_text'>
                                            {link}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}

            
        
        <div className='Popular_Categories'>
            {/* Popular Categories */}
        </div>

        {/* <div className='cats_search_sec'>
                {cats.map((cat)=>{
                    return(
                        <div className='cats_search_sec_lay'>
                        <div className='cats_search_sec_img'>
                            <img src={cat.image} />
                        </div>
                        <div className='cats_search_sec_name'>
                            {cat.name}
                        </div>
                    </div>
                    )
                   
                })}
        </div> */}
        </div> }
    </motion.div>
    
  )
}

export default Search