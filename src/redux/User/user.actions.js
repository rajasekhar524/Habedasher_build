import userTypes from './user.types'
import {auth,GoogleProvider,facebookProvider} from '../../Firebase/utils'


export const emailSignInStart = userCredentials => ({
    type:userTypes.EMAIL_SIGN_IN_START,
    payload:userCredentials
});

export const signInSuccess = user => ({
    type:userTypes.SIGN_IN_SUCCESS,
    payload:user
})

export const checkUserSession = () => ({
    type:userTypes.CHECK_USER_SESSION
})
export const signOutUserStart = () => ({
    type:userTypes.SIGN_OUT_USER_START
})

export const signOutUserSuccess = () => ({
    type:userTypes.SIGN_OUT_USER_SUCCESS
})


export const signUpUserStart = userCredentials => ({
    type:userTypes.SIGN_UP_USER_START,
    payload:userCredentials
})


export const userError = err => ({
    type:userTypes.USER_ERROR,
    payload:err
})


export const reserPasswordStart = userCredentials => ({
    type:userTypes.RESET_PASSWORD_START,
    payload:userCredentials
})

export const resetPasswordSuccess = () => ({
    type:userTypes.RESET_PASSWORD_SUCCESS,
    payload:true
})

export const resetUserState=()=>({
    type:userTypes.RESET_USER_STATE
})

export const setLoader = () => ({
    type:userTypes.SET_LOADER,
    payload:false
})



export const googleSignInStart = () => ({
    type:userTypes.GOOGLE_SIGN_IN_START
})

export const facebookSignInStart = () => ({
    type:userTypes.FACEBOOK_SIGN_IN_START
})

export const setCurrentUser = user => ({
    type:userTypes.SET_CURRENT_USER,
    payload:user
})

export const resetAllAuthForms = () => ({
    type:userTypes.RESET_AUTH_FORMS 
})

export const signUpUser =({displayName, email, password, confirmPassword}) => async dispatch =>  {
   
    

}

export const signInWithGoogle = () => async disptach => {
    try {
        await auth.signInWithPopup(GoogleProvider)
        .then(()=>{
           disptach({
            type:userTypes.SIGN_IN_SUCCESS,
            payload:true
           })
        })
    } catch (err) {
        // console.log(err)
    }

    
    
};

export const signInWithFacebook = () => async disptach => {
    try {
        await auth.signInWithPopup(facebookProvider)
        .then(()=>{
           disptach({
            type:userTypes.SIGN_IN_SUCCESS,
            payload:true
           })
        })
    } catch (err) {
        // console.log(err)
    }

    
    
};