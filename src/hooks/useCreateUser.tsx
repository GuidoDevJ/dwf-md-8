import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import Swal from "sweetalert2";
import { CreateAndAuthUser, getDataUser, signIn } from "../lib/User";
import { dataUsuario } from "./atoms";

export const useCreateUser = () => {
  const [dataUser,setDataUser] = useRecoilState(dataUsuario);
  const navigate = useNavigate();

  async function handlerSubmit(e: Event) {
    e.preventDefault();
    const target: any = e.target;
    const email = target.email;
    const password = target.password;
    const name = target.Nombre;
    const res:any = await CreateAndAuthUser(
      email.value,
      password.value,
      name.value
    );
    const data = await res.json();
    if (!data.createdAuth) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Este email ya esta en uso',
      })
    } else {
      const resToken = await signIn(email.value, password.value);
      if (resToken.token !== "") {
        let datos = await getDataUser(resToken.token)
        localStorage.setItem("dataUser",JSON.stringify({...datos,token:res.token}))
        setDataUser({...datos,token:resToken.token})
        navigate("/home");
      }
    }
  }
  return { handlerSubmit };
};
