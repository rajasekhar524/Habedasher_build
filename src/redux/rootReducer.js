import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './User/user.reducer';
import productsReducer from './Products/products.reducer';
import cartReducer from './Cart/cart.reducer';
import ordersReducer from './Orders/orders.reducer';
import wishlistReducer from './Wishlist/wishlist.reducer';
import loadingReducer from './Loading/loading.reducer';
import walletsReducer from './Wallet/wallet.reducer'


export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
  ordersData: ordersReducer,
  wishlistData: wishlistReducer,
  loadingData: loadingReducer,
  walletsData:walletsReducer
});

const configStorage = {
  key: 'root',
  storage,
  whitelist: ['cartData','wishlistData']
};

export default persistReducer(configStorage, rootReducer);

// import blogsReducer from './Blog/blogs.reducer';
// blogsData:blogsReducer,