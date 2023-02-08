import React from "react";
import { UpdateDataUserDB, UpdatePassword } from "../lib/User";
import Swal from "sweetalert2";

export const useUpdateDataUser = () => {
  async function handlerUpdateDataUser(e: Event, token: string, email: string) {
    e.preventDefault();
    const target: any = e.target;
    let name = target.nombre.value;
    let password = target.password.value;
    let repass = target.repass.value;
    if (name && password && repass) {
      if (password === repass) {
        let datosDB = await UpdateDataUserDB(token, { name, email });
        let passwordDB = await UpdatePassword(token, { password });
        if (datosDB.res && datosDB.res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Datos modificados",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ocurrio un error",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Contraseñas Incorrectas",
        });
      }
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Todos los datos son necesarios",
          });  
    }
  }
  return { handlerUpdateDataUser };
};
