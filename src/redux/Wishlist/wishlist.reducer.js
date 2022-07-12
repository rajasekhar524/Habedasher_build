import wishlistTypes from './wishlist.types'
import {handleAddToWishlist,handleRemoveWishlistItem} from './wishlist.utils'


const INTIAL_STATE = {
    wishlistItems: []
};

const wishlistReducer = (state=INTIAL_STATE, action) => {
    switch(action.type) {
        case wishlistTypes.ADD_TO_WISHLIST:
            return {
                ...state,
                wishlistItems: handleAddToWishlist({
                    prevWishlistItems: state.wishlistItems,
                    nextWishlistItem:action.payload
                })
            }
        
        case wishlistTypes.REMOVE_WISHLIST_ITEMS:
            return {
                ...state,
                wishlistItems:handleRemoveWishlistItem({
                    prevWishlistItems: state.wishlistItems,
                    wishlistItemToRemove: action.payload
                })
            };

            default:
                return state;
    }
}

export default wishlistReducer;