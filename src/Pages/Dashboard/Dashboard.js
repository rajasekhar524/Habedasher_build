// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserOrderHistory } from './../../redux/Orders/orders.actions';
// import OrderHistory from './../../components/OrderHistory';
// import './styles.scss';

// const mapState = ({ user, ordersData }) => ({
//   currentUser: user.currentUser,
//   orderHistory: ordersData.orderHistory.data
// });

// function Dashboard () {
//   const dispatch = useDispatch();
//   const { currentUser, orderHistory } = useSelector(mapState);

//   console.log('orerhistory...',orderHistory)

//   useEffect(() => {
//     console.log('dispatched')
//     dispatch(
//       getUserOrderHistory(currentUser.id)
//     );

//   }, []);

//   return (
//     <div>
//       <h1>
//         Order History
//       </h1>

//       <OrderHistory orders={orderHistory} />
//     </div>
//   );
// };

// export default Dashboard;


// import React,{useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserOrderHistory } from './../../redux/Orders/orders.actions';
// import OrderHistory from './../../components/OrderHistory';
// import './styles.scss';

// const mapState = ({ user, ordersData }) => ({
//     currentUser: user.currentUser,
//     orderHistory: ordersData.orderHistory.data
//   });

// function Dashboard() {

//   const dispatch = useDispatch();
//   const { currentUser, orderHistory } = useSelector(mapState);

//   useEffect(() => {
//         console.log('dispatched')
//         dispatch(
//           getUserOrderHistory(currentUser.id)
//         );
    
//       }, []);

//   return (
//     <div>
//         <h1>
//           Order History
//         </h1>

//         <OrderHistory orders={orderHistory} />
//     </div>
//   )
// }

// export default Dashboard

import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrderHistory } from './../../redux/Orders/orders.actions';
import OrderHistory from './../../components/OrderHistory';
import './styles.scss';

const mapState = ({ user, ordersData }) => ({
  currentUser: user.currentUser,
  orderHistory: ordersData.orderHistory.data
});

function Dashboard() {
  
  const dispatch = useDispatch();
  const { currentUser, orderHistory } = useSelector(mapState);


    useEffect(() => {
        console.log('dispatched')
        dispatch(
          getUserOrderHistory(currentUser.id)
        );
    
      }, []);

  return (
    <div>
      {orderHistory != null ? <OrderHistory orders={orderHistory} /> :'' } 
    </div>
  )
}

export default Dashboard
