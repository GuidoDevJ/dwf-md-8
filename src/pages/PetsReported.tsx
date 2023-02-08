import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { PetCardEdit } from "../components/PetCardEdit";
import { dataUsuario } from "../hooks/atoms";
import { getAllPetsUser } from "../lib/User";
import { H1 } from "../ui/H1";
import { H3 } from "../ui/H3";
import css from "./PetReported.module.css"

export const PetsReported = () => {
  let [pets, setPets] = useState([] as any);
  let [find,SetFinding] = useState(false)
  let [dataUser,setDataUser] = useRecoilState(dataUsuario)
  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("dataUser")as any)
    SetFinding(true)
    getAllPetsUser(data.token)
      .then(data=>{
        SetFinding(false)
        setPets(data)
      })  
  },[])
  return (
    <>
      <Header />
      <H1>Mis mascotas reportadas</H1>
      {!(pets.length > 0) ? (
        <H3>Aun no reportaste mascotas perdidas</H3>
      ) :(find) ? <Loader/> :<div className={css.cards}>{pets.map((pet:any)=> <PetCardEdit url={pet.img} name={pet.name} key={pet.id} id={pet.id}/>)}</div>}
      
    </>
  );
};
