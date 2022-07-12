import userTypes from './user.types';

const INITIAL_STATE = {
    currentUser:null,
    resetPasswordSuccess:false,
    userErr:[],
    loader:false
};

const userReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type) {
        case userTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser:action.payload,
                userErr:[]
            }
        
            case userTypes.SET_LOADER:
                return{
                    ...state,
                    loader:action.payload
                }     
        

        case userTypes.SIGN_UP_ERROR:
            return {
                ...state,
                userErr:action.payload
            }
        
        case userTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordSuccess:action.payload
            }

        case userTypes.RESET_USER_STATE:
        case userTypes.SIGN_OUT_USER_SUCCESS:
            return{
                ...state,
                ...INITIAL_STATE
            }       
        
        default:
            return state;
    }
};

export default userReducer;