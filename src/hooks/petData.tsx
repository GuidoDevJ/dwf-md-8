import {
    atom,
    selector
  } from 'recoil';

export const petUrlImage = atom<any>({
    key: 'petImage', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
  });
export const petCoords = atom({
  key:"coords",
  default:{
    longitude:-122.4,
    latitude: 37.8,
    zoom: 14,
  }
})

export const selectedPet = atom<any>({
  key:"selectedPet",
  default:{}
})

export const stateOfPet = atom<boolean>({
  key:"state",
  default:false
})