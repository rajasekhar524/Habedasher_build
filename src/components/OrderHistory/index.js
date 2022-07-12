import React from 'react';
import { useHistory } from 'react-router-dom';
import Orderitem from './orederitem/Orderitem';
import './orderhistory.scss'


// onClick={() => history.push(`/order/${documentID}`)}

const OrderHistory = ({ orders }) => {
  const history = useHistory();

  return (
    <div className='order_section'>
       {orders.map((order)=>{
         return (
          <Orderitem order={order} />
         )
       })}
    </div>
  )
}

export default OrderHistory;