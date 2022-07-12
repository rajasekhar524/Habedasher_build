export const existingWishlistitems = ({
    prevWishlistItems,
    nextWishlistItem
}) => {
    return prevWishlistItems.find(
        wishlistItem => wishlistItem.documentID === nextWishlistItem.documentID
    );
};


export const handleAddToWishlist = ({
    prevWishlistItems,
    nextWishlistItem
}) => {

    const wishlistItemExists = existingWishlistitems({prevWishlistItems,nextWishlistItem})

    if(wishlistItemExists) {
        return prevWishlistItems.map(wishlistItem => 
            wishlistItem.documentID === nextWishlistItem.documentID ? {
                ...wishlistItem,
                
            } : wishlistItem
        );
    }

    return [
        ...prevWishlistItems,
        {
            ...nextWishlistItem,
            
        }
    ]

};

export const handleRemoveWishlistItem = ({
    prevWishlistItems,
    wishlistItemToRemove
}) => {
    return prevWishlistItems.filter(item => item.documentID !== wishlistItemToRemove.documentID);
}

// export const handleReduceCartItem = ({
//     prevCartItems,
//     cartItemToReduce
//   }) => {
//     const existingCartItem = prevCartItems.find(cartItem =>
//       cartItem.documentID === cartItemToReduce.documentID);
  
//     if (existingCartItem.quantity === 1) {
//       return prevCartItems.filter(
//         cartItem => cartItem.documentID !== existingCartItem.documentID
//       );
//     }

//     return prevCartItems.map(cartItem =>
//         cartItem.documentID === existingCartItem.documentID ?
//         {
//           ...cartItem,
//           quantity: cartItem.quantity - 1
//         } : cartItem)
//     };