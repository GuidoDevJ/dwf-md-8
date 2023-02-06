import React, { useState } from "react";
import patitas from "../assets/patita.png";
import hambur from "../assets/hambur.png";
import css from "../components/Header.module.css";
import { useRecoilState } from "recoil";
import { dataUsuario } from "../hooks/atoms";
import { Link, useNavigate } from "react-router-dom";
export const Header = () => {
  let navegate = useNavigate()
  let [user, setUser] = useRecoilState(dataUsuario);
  const [active, setActive] = useState(false);

  function showOptionsLinks() {
    console.log("cambios");
    setActive(true);
  }
  function hiddeoptions() {
    setActive(false);
  }
  function goToHome(){
    navegate("/home")
  }

  return (
    <header className={css.header}>
      <img src={patitas} className={css.img__icon} onClick={goToHome}/>
      <img src={hambur} className={css.menu} onClick={showOptionsLinks} />
      <div className={!active ? css.menu__options : css.menu__options_active}>
        <div className={css.menu__options_close}>
          <span className={css.cross} onClick={hiddeoptions}>
            X
          </span>
        </div>
        <ul className={css.menu__options__links}>
          <li>
            <Link to={"/misdatos"} className={css.data}>
              Mis Datos
            </Link>
          </li>
          <li>
            <Link to={"/petsreported"} className={css.reportPetsData}>
              Mis mascotas reportadas
            </Link>
          </li>
          <li>
            <Link to={"/report"} className={css.reportPet}>
              Reportar mascota
            </Link>
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
