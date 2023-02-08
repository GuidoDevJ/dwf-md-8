import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Header } from "../components/Header";
import { dataUsuario } from "../hooks/atoms";
import { Btn } from "../ui/Btn";
import { H1 } from "../ui/H1";
import { InputLabel } from "../ui/InputLabel";
import css from "./MisDatos.module.css";
import { useUpdateDataUser } from '../hooks/useUpdateDataUser';
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
export const MisDatos = () => {
  const navegate = useNavigate()
  let [data,setData] = useRecoilState(dataUsuario)
  useEffect(()=>{
    if(data.token === ""){
      navegate("/")
    }
  },[])
  const datos = useLocalStorage()
   const [userData, setDataUser] = useRecoilState(dataUsuario);
  const {handlerUpdateDataUser} = useUpdateDataUser()
  return (
    <>
      <div className={css.container}>
        <Header />
        <form className={css.container_body} onSubmit={(e:any)=>handlerUpdateDataUser(e,userData.token,userData.email)}>
          <H1>Mis Datos</H1>
          <InputLabel name="nombre" textLabel="Nombre" type="text" namePetOrUser={userData.name}/>
          <InputLabel name="password" textLabel="Contraseña" type="password" />
          <InputLabel
            name="repass"
            textLabel="Repetir Contraseña"
            type="password"
          />
          <Btn color="#FF9DF5">Guardar</Btn>
        </form>
      </div>
    </>
  );
};
