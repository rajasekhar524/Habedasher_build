import React from 'react'
import './sortfiltert.scss'
import { motion } from "framer-motion"

const transition = {
  duration: 0.5,
  ease: [0.23, 0.13, 0.23, 0.96]
};

const backVariants = {
  exit: { y: -10, opacity: 0, transition },
  enter: { y: 0, opacity: 1, transition: { delay: 0, ...transition } }
};

function Sortfilter({sortlow,sorthigh}) {
  return (
    <motion.div initial="exit" animate="enter" exit="exit" variants={backVariants} className='Sortfilter_sec'>
            <div onClick={sortlow} className='Sortfilter_sec_item_one'>Price -- Low to High</div>
            <div onClick={sorthigh} className='Sortfilter_sec_item_two'>Price -- High to Low</div>
    </motion.div>
  )
}

export default Sortfilter