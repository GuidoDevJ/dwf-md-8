import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { signIn } from "../lib/User";
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
        setDataUser({
          email: email.value,
          token: res.token,
        });
        navigate("/home");
      }
    }
  };
  return { handlerSubmit };
};
