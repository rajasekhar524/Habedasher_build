
export const handleLoading = order => {
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