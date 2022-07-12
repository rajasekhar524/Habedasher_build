import loadingType from './loading.types'
import { takeLatest, put, all, call } from 'redux-saga/effects';
import {loadingState} from './loading.actions'



export function* getLoading({ payload }) {
    try {
        console.log('loading',payload)
        loadingState(payload)
    } catch (err) {
      console.log(err);
    }
  }
  
  export function* onLoading() {
    yield takeLatest(loadingType.LOADINGSTATE, getLoading);
  };

  export default function* loadingSagas() {
    yield all([
      call(onLoading),
    ])
  }