import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { dataUsuario } from "./atoms";

export const useLocalStorage = () => {
  const [dataUser, setDataUser] = useRecoilState(dataUsuario);

  useEffect(() => {
    let datos = JSON.parse(localStorage.getItem("dataUser") as any);
    if (datos) {
      setDataUser({ ...datos });
    }
    return () => setDataUser({ ...datos });
  }, []);
};
