import walletTypes from './wallet.types';

export const saveWalletHistory = wallet => ({
  type: walletTypes.SAVE_WALLET_HISTORY_START,
  payload: wallet
});

export const getUserWalletHistory = uid => ({
  type: walletTypes.GET_WALLET_HISTORY_START,
  payload: uid
});

export const updateWalletHistory = wallet => ({
  type: walletTypes.UPDATE_WALLET_HISTORY_START,
  payload: wallet
});
export const setUserWalletHistory = history => ({
  type: walletTypes.SET_WALLET_HISTORY_START,
  payload: history
});

