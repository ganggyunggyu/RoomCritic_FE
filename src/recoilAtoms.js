/** @format */

import { atom } from 'recoil';

export const isLoggedInState = atom({
  key: 'inLoggedInState',
  default: false,
});
export const userInfoState = atom({
  key: 'userInfoState',
  default: null,
});
export const searchContentsState = atom({
  key: 'searchContentsState',
  default: [],
});
export const reviewsState = atom({
  key: 'reviewsState',
  default: [],
});
export const darkModeState = atom({
  key: 'darkModeState',
  default: false,
});
