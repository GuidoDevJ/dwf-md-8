import React from "react";
import { useRecoilState } from "recoil";
import { Dropzone } from "../components/Dropzone";
import { Header } from "../components/Header";
import { Mapbox } from "../components/Mapbox";
import { petUrlImage } from "../hooks/petData";
import { Btn } from "../ui/Btn";
import { H1 } from "../ui/H1";
import { Input } from "../ui/Input";
import { InputLabel } from "../ui/InputLabel";
import css from "./Report.module.css";

export const Report = () => {
  const [url, SetUrl] = useRecoilState(petUrlImage);
  return (
    <>
      <div className={css.container}>
        <Header />
        <div className={css.container_body}>
          <H1>Reportar mascota perdida</H1>
          <label htmlFor="Nombre"></label>
          <InputLabel name="Nombre" textLabel="Nombre" type="text"/>
          <Dropzone />
          <Mapbox />
          <Btn color="#FF9DF5">Reportar como perdido</Btn>
          <Btn color="#CDCDCD">Cancelar</Btn>
        </div>
      </div>
    </>
  );
};
