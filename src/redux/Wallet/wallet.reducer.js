import walletTypes from './wallet.types';

const INITIAL_STATE = {
  walletHistory: {},
};

const walletsReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case walletTypes.SET_WALLET_HISTORY_START:
      return {
        ...state,
        walletHistory: action.payload
      };
      
    default:
      return state;
  }
};

export default walletsReducer;