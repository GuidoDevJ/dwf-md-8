import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { CreateAndAuthUser, signIn } from "../lib/User";
import { dataUsuario } from "./atoms";

export const useCreateUser = () => {
  const setDataUser = useSetRecoilState(dataUsuario);
  const navigate = useNavigate();

  async function handlerSubmit(e: Event) {
    e.preventDefault();
    const target: any = e.target;
    const email = target.email;
    const password = target.password;
    const name = target.Nombre;
    const res = await CreateAndAuthUser(
      email.value,
      password.value,
      name.value
    );
    const data = await res.json();
    if (!data.createdAuth) {
      alert(
        "Este email ya esta siendo usado, por favor dirijase para ingresar"
      );
    } else {
      const resToken = await signIn(email.value, password.value);
      if (resToken.token !== "") {
        setDataUser({
          email: email.value,
          token: resToken.token,
        });
        navigate("/home");
      }
    }
  }
  return { handlerSubmit };
};
