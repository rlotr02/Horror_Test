import { atom } from 'recoil';

export const pageState = atom<number>({
  key: 'pageState',
  default: 0,
});

export const resultState = atom<number>({
  key: 'resultState',
  default: 0,
});
