import {
    atom,
    selector
  } from 'recoil';

export const petUrlImage = atom({
    key: 'petImage', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });