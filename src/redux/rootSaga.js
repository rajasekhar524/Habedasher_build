import { all, call } from 'redux-saga/effects';
import userSagas from './User/user.sagas'
import productSagas from "./Products/products.sagas"
import ordersSagas from './Orders/orders.sagas';
import walletsSagas from './Wallet/wallet.sagas'
import loadingSagas from './Loading/loading.sagas'


export default function* rootSaga() {
    yield all([call(userSagas),call(productSagas),call(ordersSagas),call(walletsSagas),call(loadingSagas)])
}