import walletTypes from './wallet.types';
import { takeLatest, put, all, call } from 'redux-saga/effects';
// import { handleSaveWallet, handleGetUserOrderHistory,handleGetOrder } from './orders.helpers';
import {handleSaveWallet,handleGetUserWalletHistory,handleupdateSaveWallet} from './wallet.helpers'
import {setUserWalletHistory} from './wallet.actions'
import { auth } from '../../Firebase/utils';
// import { clearCart } from '../Cart/cart.actions';
// import { setUserOrderHistory, setOrderDetails } from './orders.actions';

export function* getUserWalletHistory({ payload }) {
  try {
    
    const history = yield handleGetUserWalletHistory(payload);
    yield put(
      setUserWalletHistory(history)
    );

  } catch (err) {
    console.log(err);
  }
}

export function* onGetWalletOrderHistoryStart() {
  yield takeLatest(walletTypes.GET_WALLET_HISTORY_START, getUserWalletHistory);
};

export function* saveWallet({ payload }) {
  try {
    console.log('payloadsavewallet',payload)
    console.log( auth.currentUser.uid)
    yield handleSaveWallet({
      ...payload,
      walletUserID: auth.currentUser.uid,

    });

  } catch (err) {
    console.log(err);
  }
};

export function* onSaveWalletHistoryStart() {
  yield takeLatest(walletTypes.SAVE_WALLET_HISTORY_START, saveWallet);
};

export function* updateWallet({ payload }) {
  try {
    console.log('sagasorderupdate',payload)
    yield handleupdateSaveWallet({
      ...payload,
      walletUserID: auth && auth.currentUser && auth.currentUser.uid,

    });
  } catch (err) {
    console.log(err);
  }
};

export function* onUpdateWalletHistoryStart() {
  yield takeLatest(walletTypes.UPDATE_WALLET_HISTORY_START, updateWallet);
};

export default function* walletsSagas() {
  yield all([
    call(onSaveWalletHistoryStart),
    call(onGetWalletOrderHistoryStart), 
    call(onUpdateWalletHistoryStart),
  ])
}