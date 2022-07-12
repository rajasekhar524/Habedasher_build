import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal, selectdiscountCartTotal } from './../../../redux/Cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { useEffect } from 'react';



const mapState = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    distotal:selectdiscountCartTotal
  });

  const mapnewState = state => ({
    statein: state.loadingData.loading.walletcl
  });


function Estimated({walletcl,handleamount}) {
    const { cartItems, total, distotal } = useSelector(mapState);
    const {statein} = useSelector(mapnewState);
    const [i,setI] = useState(false)

    useEffect(()=>{
        if(statein === false){
            handleamount(total)
        }else{
            handleamount(distotal)
        }
    },[])

  return (
    <div style={{width:'100%', display:'flex', justifyContent:'space-between'}}>

        <div className='cart_section_estimated_total_text'>
              Estimated total
           </div>
          {!statein?<div className='cart_section_estimated_total_total'>
           ₹ {total}
           </div>:<div className='cart_section_estimated_total_total'>
           ₹ {distotal}
           </div>} 
    </div>
  )
}

export default Estimated