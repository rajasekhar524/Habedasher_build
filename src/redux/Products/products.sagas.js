import { auth } from './../../Firebase/utils';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setProducts, setProduct, fetchProductsStart } from './products.actions';
import { handleAddProduct, handleFetchProducts,
  handleFetchProduct, handleDeleteProduct, handleFetchProductsDresstype,handleFetchProductsAllfilter } from './products.helpers';
import productsTypes from './products.types';

export function* addProduct({ payload }) {

  try {
    const timestamp = new Date();
    yield handleAddProduct({
      ...payload,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp
    });
    yield put(
      fetchProductsStart()
    );


  } catch (err) {
    // console.log(err);
  }

}

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* fetchProducts({ payload }) {

  try {
    const products = yield handleFetchProducts(payload);
    yield put(
      setProducts(products)
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* fetchProductsDresstype({ payload }) {

  try {
    const products = yield handleFetchProductsDresstype(payload);
    yield put(
      setProducts(products)
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchProductsStartDresstype() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START_DRESSTYPE, fetchProductsDresstype);
}

export function* fetchProductsAllfilter({ payload }) {
  console.log('..intheallfilter')
  console.log(payload)
  try {
    const products = yield handleFetchProductsAllfilter(payload);
    yield put(
      setProducts(products)
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchProductsStartAllfilter() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START_ALLFILTER, fetchProductsAllfilter);
}

export function* deleteProduct({ payload }) {
  try {
    yield handleDeleteProduct(payload);
    yield put (
      fetchProductsStart()
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onDeleteProductStart() {
  yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct);
}

export function* fetchProduct({ payload }) {
  try {
    const product = yield handleFetchProduct(payload);
    console.log('payload',payload)
    yield put(
      setProduct(product)
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchProductStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCT_START, fetchProduct);
}

export default function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(onDeleteProductStart),
    call(onFetchProductStart),
    call(onFetchProductsStartDresstype),
    call(onFetchProductsStartAllfilter)
  ])
}