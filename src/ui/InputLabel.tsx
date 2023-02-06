import React from "react";
import { useRecoilState } from "recoil";
import { dataUsuario } from "../hooks/atoms";
import css from "./InputLabel.module.css"
export const InputLabel = ({name,textLabel,type,onChange,namePetOrUser}:any) => {
  
  return (
    <>
    <div className={css.container}>
    <label htmlFor={name} className={css.label}>{textLabel}</label>
      <input type={type} id={name} className={css.input} onChange={onChange} defaultValue={namePetOrUser !== undefined ? namePetOrUser:""}/>
    </div>
   
    </>
  );
};
