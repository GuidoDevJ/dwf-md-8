import React, { useState } from "react";
import { Btn } from "../ui/Btn";
import ContImg from "../ui/ContImg";
import styles from "./PetCard.module.css";
export const PetCard = ({ url,name }: any) => {
  const [active, setActive] = useState(false);
  function showPanel(e: any) {
    e.preventDefault();
    setActive(true);
  }
  function hiddPanel() {
    setActive(false);
  }
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={url} />
      </div>
      <div className={styles.data}>
        <div className={styles.names}>
          <h2>{name}</h2>
        </div>
        <div className={styles.report}>
          <a href="#" className={styles.report__link} onClick={showPanel}>
            Reportar Informacion
          </a>
        </div>
      </div>
      <div
        className={!active ? styles.datareported : styles.datareported__active}
      >
        <form className={styles.form}>
          <div className={styles.form__close}>
            <span className={styles.cross} onClick={hiddPanel}>
              X
            </span>
          </div>
          <h1>Reportar Informacion de {name}</h1>
          <div>
            <label htmlFor="name">Tu Nombre</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="telefono">Tu Telefono</label>
            <input type="text" className="phone" />
          </div>
          <div>
            <label htmlFor="description">Donde lo viste?</label>
            <textarea className="acerca"></textarea>
          </div>
          <div className={styles.btn__container}>
            <Btn color="#FF9DF5">Enviar</Btn>
          </div>
        </form>
      </div>
    </div>
  );
};
