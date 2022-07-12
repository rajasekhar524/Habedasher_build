import loadingType from "./loading.types";

const INITIAL_STATE = {
    loading:false
}

const loadingReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case loadingType.LOADINGSTATE:
            return {
                ...state,
                loading:action.payload
            }
        default:
            return state;
    }
}

export default loadingReducer;