import React from "react";
import css from "./InputLabel.module.css"
export const InputLabel = ({name,textLabel,type,onChange}:any) => {
  return (
    <>
    <div className={css.container}>
    <label htmlFor={name} className={css.label}>{textLabel}</label>
      <input type={type} id={name} className={css.input} onChange={onChange}/>
    </div>
   
    </>
  );
};
