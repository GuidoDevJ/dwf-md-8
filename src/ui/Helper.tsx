import React from "react";
import { Link } from "react-router-dom";
import css from "./Helper.module.css"
export const Helper = () => {
  return (
    <>
      <h3>¿Aun no tienes una cuenta?</h3>
      <Link to={"/create"} className={css.form__btnCreate}>Crear Cuenta</Link>
    </>
  );
};
