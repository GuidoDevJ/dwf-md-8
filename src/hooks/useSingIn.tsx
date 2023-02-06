import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { getDataUser, signIn } from "../lib/User";
import { dataUsuario } from "./atoms";

export const useSingIn = () => {
  const setDataUser = useSetRecoilState(dataUsuario);
  const navigate = useNavigate();

  const handlerSubmit = async (e: Event) => {
    e.preventDefault();
    console.log("Hola");
    const target: any = e.target;
    const email = target.email;
    const password = target.password;

    if (email.value !== "" && password.value !== "") {
      let res = await signIn(email.value, password.value);
      if (!res.token) {
        alert("Lo siento usuario o contraseña incorrecto");
      } else {
        let datos = await getDataUser(res.token)
        setDataUser({...datos})
        navigate("/home");
      }
    }
  };
  return { handlerSubmit };
};
