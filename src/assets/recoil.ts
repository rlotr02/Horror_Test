import { atom } from 'recoil';

export const pageState = atom<number>({
  key: 'pageState',
  default: 0,
});

export const resultState = atom<string>({
  key: 'resultState',
  default: '',
});

export const resultNumState = atom<number>({
  key: 'resultNumState',
  default: 0,
});
