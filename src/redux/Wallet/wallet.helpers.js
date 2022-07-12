import { firestore } from '../../Firebase/utils';

export const handleSaveWallet = wallet => {
 
  return new Promise((resolve, reject) => {
    console.log('walletdid',wallet)
    try{
      firestore
      .collection('wallet')
      .doc(wallet.walletUserID)
      .set(wallet)
      .then(() => {
        resolve();
      })

    }catch(err){
      console.log(err);
    }
      
  });
};

export const handleGetUserWalletHistory = uid => {
  return new Promise((resolve, reject) => {
    let ref = firestore.collection('wallet');
    ref = ref.where('walletUserID', '==', uid);

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

        
      })
      .catch(err => {
        reject(err);
      });


  });
};

export const handleupdateSaveWallet = wallet => {

  return new Promise((resolve, reject) => {
    try{
      let ref = firestore
      .collection('wallet')
      .doc(wallet.walletUserID)
      ref.update({wallet:0})
      .then(() => {
        resolve();
        console.log('done updating')
      })

    }catch(err){
      console.log(err);
    }
      
  });
};


// export const handleGetOrder = orderID => {
//   return new Promise((resolve, reject) => {
//     firestore
//       .collection('orders')
//       .doc(orderID)
//       .get()
//       .then(snap => {
//         if (snap.exists) {
//           resolve({
//             ...snap.data(),
//             documentID: orderID
//           })
//         }
//       })
//       .catch(err => {
//         reject(err);
//       })
//   })
// }