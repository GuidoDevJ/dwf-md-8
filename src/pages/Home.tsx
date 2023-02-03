import React, { useState,useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Header } from "../components/Header";
import { PetCard } from "../components/PetCard";
import { coordUser } from "../hooks/atoms";
import { useUsersPets } from "../hooks/useUsersPets";
import { Btn } from "../ui/Btn";
import css from "./Home.module.css";

export const Home = () => {
  let [data, setData] = useState([]);
  const {giveCoords,pet} = useUsersPets()
    return (
    <>
      <Header />
      <div className={css.container}>
        <h1>Mascotas perdidas cerca tuyo</h1>
        <p className={pet.length > 0 ? css.hidden : css.text}>
          Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
          conocer tu ubicación.
        </p>
        <div className={pet.length > 0 ? css.hidden : css.btn__container}>
          <Btn color="#FF9DF5" onClick={giveCoords}>Dar mi ubicacion</Btn>
        </div>
        <div className={css.cards}>
          {pet.length > 0 ?pet.map((dog:any)=>
            <PetCard url={dog.img} name={dog.name}></PetCard>
            ) :null}
        </div>
      </div>
    </>
  );
};
