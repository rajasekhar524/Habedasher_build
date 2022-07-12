import loadingType from "./loading.types";

export const loadingState = loading =>({
    type:loadingType.LOADINGSTATE,
    payload:loading
})