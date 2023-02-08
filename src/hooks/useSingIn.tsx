import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import Swal from "sweetalert2";
import { getDataUser, signIn } from "../lib/User";
import { dataUsuario } from "./atoms";

export const useSingIn = () => {
  const [dataUser,setDataUser] = useRecoilState(dataUsuario);
  const navigate = useNavigate();

  const handlerSubmit = async (e: Event) => {
    e.preventDefault();
    const target: any = e.target;
    const email = target.email;
    const password = target.password;

    if (email.value !== "" && password.value !== "") {
      let res = await signIn(email.value, password.value);
      if (!res.token) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "Lo siento usuario o contraseña incorrecto",
        })
      } else {
        let datos = await getDataUser(res.token)
        localStorage.setItem("dataUser",JSON.stringify({...datos,token:res.token}))
        setDataUser({...datos,token:res.token})
        navigate("/home");
      }
    }else{
      Swal.fire({
        icon: 'question',
        title: 'Oops...',
        text: 'Por favor todos los campos son necesarios',
      })
    }
  };
  return { handlerSubmit };
};
