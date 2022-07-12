import React,{useEffect} from 'react'
import './wallet.scss'
import  {useSelector,useDispatch} from 'react-redux'  
import { selectCartItemsCount} from './../../../redux/Cart/cart.selector'
import { getUserWalletHistory } from '../../../redux/Wallet/wallet.actions';

const mapState = (state) => ({
    currentUser:state.user.currentUser,
    totalNumCartItems:selectCartItemsCount(state),
    wallet:state.walletsData.walletHistory
    
  });

function Wallet() {
    const dispatch = useDispatch()
    const {currentUser,wallet} = useSelector(mapState)
    const {data} = wallet

    
    useEffect (()=>{
        if (currentUser)
        dispatch(getUserWalletHistory(currentUser.id))
    },[])

  return (
    // <div></div>
    <div>{currentUser != null && currentUser.id != null && data != null && data[0] && data[0]!=null && data[0].wallet && data[0].wallet != null?<div>Wallet - Rs.{data[0].wallet}</div>:<div></div>} </div>
  )
}

export default Wallet