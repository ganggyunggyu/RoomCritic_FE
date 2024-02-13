import { atom } from 'recoil';

export const isLoggedInState = atom({
  key: 'inLoggedInState',
  default: false,
});
export const userInfoState = atom({
  key: 'userInfoState',
  default: {},
});
export const searchContentsState = atom({
  key: 'searchContentsState',
  default: [],
});
export const reviewsState = atom({
  key: 'reviewsState',
  default: [],
});
export const selectReviewState = atom({
  key: 'selectReviewState',
  default: {},
});
export const isDarkModeState = atom({
  key: 'isDarkModeState',
  default: false,
});
export const darkModeClassesState = atom({
  key: 'darkModeClassesState',
  default: '',
});
