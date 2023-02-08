import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getDataUser } from "../lib/User";
import { dataUsuario } from "./atoms";
import { useLocalStorage } from "./useLocalStorage";

export const useGetUserData = () => {
  const data = useLocalStorage();

  const [userData, setDataUser] = useRecoilState(dataUsuario);

  useEffect(() => {
    getDataUser(userData.token).then((datos) => {
      setDataUser({
        ...userData,
        name: datos.name,
      });
    });
  }, []);
};
