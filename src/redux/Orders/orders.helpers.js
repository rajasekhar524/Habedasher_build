import { firestore } from './../../Firebase/utils';

export const handleSaveOrder = order => {
  return new Promise((resolve, reject) => {
    try{
      firestore
      .collection('orders')
      .doc()
      .set(order)
      .then(() => {
        resolve();
      })

    }catch(err){
      console.log(err);
    }
      
  });
};

export const handleGetUserOrderHistory = uid => {
  console.log('handleentered')
  console.log('uid',uid)
  return new Promise((resolve, reject) => {
    let ref = firestore.collection('orders').orderBy('orderCreatedDate');
    ref = ref.where('orderUserID', '==', uid);

    ref
      .get()
      .then(snap => {
        const data = [
          ...snap.docs.map(doc => {
            return {
              ...doc.data(),
              documentID: doc.id
            }
          })
        ];

        resolve({ data });

        console.log('handlhistory',data)
      })
      .catch(err => {
        reject(err);
      });


  });
};

export const handleGetOrder = orderID => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('orders')
      .doc(orderID)
      .get()
      .then(snap => {
        if (snap.exists) {
          resolve({
            ...snap.data(),
            documentID: orderID
          })
        }
      })
      .catch(err => {
        reject(err);
      })
  })
}