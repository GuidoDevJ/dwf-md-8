import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Header } from "../components/Header";
import { PetCardEdit } from "../components/PetCardEdit";
import { dataUsuario } from "../hooks/atoms";
import { useGetPets } from "../hooks/useGetPets";
import { getAllPetsUser } from "../lib/User";
import { H1 } from "../ui/H1";
import { H3 } from "../ui/H3";
import css from "./PetReported.module.css"

export const PetsReported = () => {
  let [pets, setPets] = useState([] as any);
  let [dataUser,setDataUser] = useRecoilState(dataUsuario)

  // useEffect(()=>{
  //   window.addEventListener("click",()=>{
  //       setPets([...pets,"1"])
  //   })
  //   return ()=> window.removeEventListener("click",setPets([]) as any)
  // },[])
  useEffect(()=>{
    getAllPetsUser(dataUser.token)
      .then(data=>setPets(data))  
  },[])
  return (
    <>
      <Header />
      <H1>Mis mascotas reportadas</H1>
      {!(pets.length > 0) ? (
        <H3>Aun no reportaste mascotas perdidas</H3>
      ) : <div className={css.cards}>{pets.map((pet:any)=> <PetCardEdit url={pet.img} name={pet.name} key={pet.id} id={pet.id}/>)}</div>}
      
    </>
  );
};
