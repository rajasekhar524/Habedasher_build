import wishlistTypes from './wishlist.types'

export const addProducttoWishlist = (nextWishlistItem) => ({
    type:wishlistTypes.ADD_TO_WISHLIST,
    payload:nextWishlistItem
})

export const removeWishlistItemFromWishlist = (wishlistItem) => ({
    type:wishlistTypes.REMOVE_WISHLIST_ITEMS,
    payload:wishlistItem
})
