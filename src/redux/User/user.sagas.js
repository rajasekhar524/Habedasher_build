import {takeLatest, call, all, put} from 'redux-saga/effects';
import userTypes from './user.types'
import { signOutUserSuccess,signInSuccess,userError,resetPasswordSuccess,setLoader} from './user.actions'
import {auth,handleUserProfile,getCurrentUser,GoogleProvider,facebookProvider} from './../../Firebase/utils'
import {handleResetPasswordAPI} from './user.helper'


export function* getSnapshotFromUserAuth(user,additionalData={}) {
    try{
              // console.log('inuser')
              const userRef = yield call(handleUserProfile,{userAuth:user, additionalData});
              const snapshot = yield userRef.get();
              yield put(
                setLoader(true)
              );
              yield put(
                  signInSuccess({
                        id:snapshot.id,
                        ...snapshot.data()
              }));

              yield put(
                setLoader(false)
              );
         
    }catch(err) {

    }
}

export function* emailSignIn({payload:{email,password}}){
    try {
       const {user} = yield auth.signInWithEmailAndPassword(email.trim(), password);
       yield getSnapshotFromUserAuth(user)
    } catch(err){
        // console.log(err)
        alert('Wrong password')
    }
}

export function* onEmailSignInStart () {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START,emailSignIn);
}
 
export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
         
         
    } catch(err) {

    }
}

export function* signOutUser(){
    try {
        yield auth.signOut();
        yield put(
            signOutUserSuccess()
        ) 
    } catch(err){
        console.log(err)
    }
}

export function* onSignOutUserStart () {
    yield takeLatest(userTypes.SIGN_OUT_USER_START,signOutUser)
}

export function* onCheckUserSesssion() {
    yield takeLatest(userTypes.CHECK_USER_SESSION,isUserAuthenticated)
}


export function* signUpUser({payload:{
    displayName,email,password,confirmPassword
}}) {

    if(password !== confirmPassword) {
        const err = ['Passwords dont match'];
        yield put (
            userError(err)
        );
        return;
    }
    
    try {
           const {user} = yield auth.createUserWithEmailAndPassword(email.trim(),password);
           const additionalData = {displayName}; 
           yield getSnapshotFromUserAuth(user, additionalData);
           
          
    } catch(err) {
        console.log(err);
        alert(err.message + 'Please Sign In')
    } 
}   



export function* onSignUpUserStart() {
   yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser)
}


export function* resetPassword({ payload: { email }}) {
    try {
      yield call(handleResetPasswordAPI, email);
      yield put(
        resetPasswordSuccess()
      );
  
    } catch (err) {
      yield put(
        userError(err)
      )
    }
  }
  
  export function* onResetPasswordStart() {
    yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword);
  }
  
  export function* googleSignIn() {
    try {
      const { user } = yield auth.signInWithPopup(GoogleProvider);
      yield getSnapshotFromUserAuth(user);
  
    } catch (err) {
      // console.log(err);
    }
  }

  export function* onGoogleSignInStart() {
    yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn);
  }

  export function* facebookSignIn() {
    try {
      const { user } = yield auth.signInWithPopup(facebookProvider);
      yield getSnapshotFromUserAuth(user);
  
    } catch (err) {
      // console.log(err);
    }
  }

  export function* onFacebookSignInStart() {
    yield takeLatest(userTypes.FACEBOOK_SIGN_IN_START, facebookSignIn);
  }


  export default function* userSagas() {
    yield all([
      call(onEmailSignInStart),
      call(onSignOutUserStart),
      call(onSignUpUserStart),
      call(onResetPasswordStart),
      call(onCheckUserSesssion),
      call(onGoogleSignInStart),
      call(onFacebookSignInStart)
    ])
  }

