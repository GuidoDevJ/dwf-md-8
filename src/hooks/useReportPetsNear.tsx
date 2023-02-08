import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { getPetById } from "../lib/Pets";
import { getAllPetsNear, getUserById } from "../lib/User";
import { coordUser, dataUsuario } from "./atoms";
import { useLocalStorage } from "./useLocalStorage";


export const useUsersPets = () => {

  const data = useLocalStorage()
  const [userData, setDataUser] = useRecoilState(dataUsuario);
  let [find,SetFinding] = useState(false)
  const token = userData.token;
  let [pet, setPets] = useState([]);
  const [coords, setCoords] = useRecoilState(coordUser);
  function giveCoords() {
    navigator.geolocation.getCurrentPosition(async function (position) {
      setCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      SetFinding(true)
      let dogs = await getAllPetsNear(
        token,
        position.coords.latitude,
        position.coords.longitude
      );
      const info = await Promise.all(
        dogs.map(async (dog: any) => {
          return await getPetById(token, dog.objectID);
        })
      );
      let dogsToPrint = info.filter((dog) => dog !== null);
      dogsToPrint = dogsToPrint.filter(
        (dog) => dog.name !== "SequelizeConnectionError"
      );
      let users = await Promise.all(
        dogsToPrint.map(async (dog: any) => {
          return await getUserById(token, dog.UserId);
        })
      );
      let dogsAndUsersData = dogsToPrint.map((dog: any) => {
        let userOfDog = users.find((user) => user.id === dog.UserId);
        return {
          ...dog,
          email: userOfDog.email,
        };
      });
      setPets(dogsAndUsersData as any);
      SetFinding(false)
    });
  }
  return { pet, giveCoords,find,SetFinding };
};
