import {createSelector} from 'reselect'

export const selectWishlistData = state => state.wishlistData;

export const selectWishlistItems = createSelector(
    [selectWishlistData],
    wishlistData => wishlistData.wishlistItems
);

export const selectWishlistItemsCount = createSelector(
    [selectWishlistItems],
    wishlistItems => wishlistItems.reduce((quantity, wishlistItem) => quantity + wishlistItem.quantity, 0)
);

export const selectWishlistTotal = createSelector(
    [selectWishlistItems],
    wishlistItems => 
    wishlistItems.reduce ((quantity, wishlistItem) => 
            quantity + wishlistItem.quantity * wishlistItem.productPrice,0)
);