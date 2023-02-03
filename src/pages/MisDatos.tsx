import React from "react";
import { Header } from "../components/Header";
import { Btn } from "../ui/Btn";
import { H1 } from "../ui/H1";
import { InputLabel } from "../ui/InputLabel";
import css from "./MisDatos.module.css";
export const MisDatos = () => {
  return (
    <>
      <div className={css.container}>
        <Header />
        <div className={css.container_body}>
          <H1>Mis Datos</H1>
          <InputLabel name="nombre" textLabel="Nombre" type="text" />
          <InputLabel name="password" textLabel="Contraseña" type="password" />
          <InputLabel
            name="repass"
            textLabel="Repetir Contraseña"
            type="password"
          />
          <Btn color="#FF9DF5">Guardar</Btn>
        </div>
      </div>
    </>
  );
};
