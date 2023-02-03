import React, { useState } from "react";
import patitas from "../assets/patita.png";
import hambur from "../assets/hambur.png";
import css from "../components/Header.module.css";
import { useRecoilState } from "recoil";
import { dataUsuario } from "../hooks/atoms";
export const Header = () => {
  let [user,setUser] = useRecoilState(dataUsuario)
  const [active, setActive] = useState(false);

  function showOptionsLinks() {
    console.log("cambios");
    setActive(true);
  }
  function hiddeoptions(){
    setActive(false);
  }

  return (
    <header className={css.header}>
      <img src={patitas} className={css.img__icon} />
      <img src={hambur} className={css.menu} onClick={showOptionsLinks} />
      <div className={!active ?css.menu__options : css.menu__options_active}>
        <div className={css.menu__options_close}>
          <span className={css.cross} onClick={hiddeoptions}>X</span>
        </div>
        <ul className={css.menu__options__links}>
          <li>
            <a href="#" className={css.data}>
              Mi data
            </a>
          </li>
          <li>
            <a href="#" className={css.reportPetsData}>
              Mis mascotas reportadas
            </a>
          </li>
          <li>
            <a href="#" className={css.reportPet}>
              Reportar mascota
            </a>
          </li>
        </ul>
        <div className={css.menu__options__me}>
          <h3 className={css.correo}>{(user as any).email}</h3>
          <a href="#" className={css.singout}>
            Cerrar Session
          </a>
        </div>
      </div>
    </header>
  );
};
