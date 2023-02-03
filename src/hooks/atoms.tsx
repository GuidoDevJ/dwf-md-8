import { atom, selector } from "recoil";
import { getAllPetsNear } from "../lib/User";
type coords = {
  lat: number;
  lng: number;
};
type dataUser = {
  email: string;
  token: string;
  name: string;
};

export const dataUsuario = atom<dataUser>({
  key: "dataUsuario", // unique ID (with respect to other atoms/selectors)
  default: {
    email: "",
    token: "",
    name: "",
  }, // default value (aka initial value)
});

export const datosUsuario = selector({
  key: "DataUser",
  get: async ({ get }) => {},
});

export const coordUser = atom<coords>({
  key: "userCoord",
  default: {
    lat: 0,
    lng: 0,
  },
});

// export const petsByCods = selector({
//   key: "petsNear",
//   get: async ({ get }) => {
//     const coordsUser = get(coordUser);
//     const dataUser = get(dataUsuario);
//     const token = dataUser.token;
//     const lat = coordsUser.lat;
//     const lng = coordsUser.lng;
//     if(lat === 0 && lng === 0){
//       return;
//     }else{
//       let res = await getAllPetsNear(token, lat,lng);
//     return res
//     }
    
//   },
// });
