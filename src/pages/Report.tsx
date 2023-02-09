import React,{useEffect} from "react";
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
import { useReportPet } from '../hooks/useReportPet';
import { useNavigate } from "react-router-dom";
import { dataUsuario } from "../hooks/atoms";

export const Report = () => {
  const navegate = useNavigate()
  let [data,setData] = useRecoilState(dataUsuario)
  useEffect(()=>{
    if(data.token === ""){
      navegate("/")
    }
  },[])
    const {uploadImage} = useReportPet()
  return (
    <>
      <div className={css.container}>
        <Header />
        <form className={css.container_body} onSubmit={(e:any)=>uploadImage(e)}>
          <H1>Reportar mascota perdida</H1>
          <label htmlFor="Nombre"></label>
          <InputLabel name="Nombre" textLabel="Nombre" type="text"/>
          <Dropzone />
          <Mapbox />
          <Btn color="#FF9DF5">Reportar como perdido</Btn>
          <Btn color="#CDCDCD" onClick={(e:Event)=>{
            e.preventDefault()
            navegate("/petsreported")
          }}>Cancelar</Btn>
        </form>
      </div>
    </>
  );
};
