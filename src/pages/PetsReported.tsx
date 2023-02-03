import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { PetCardEdit } from "../components/PetCardEdit";
import { H1 } from "../ui/H1";
import { H3 } from "../ui/H3";

export const PetsReported = () => {
  let [pets, setPets] = useState([] as any);
//   useEffect(()=>{
//     window.addEventListener("click",()=>{
//         setPets([...pets,"1"])
//     })
//     return ()=> window.removeEventListener("click",setPets([]) as any)
//   },[])
  return (
    <>
      <Header />
      <H1>Mis mascotas reportadas</H1>
      {/* {!(pets.length > 0) ? (
        <H3>Aun no reportaste mascotas perdidas</H3>
      ) : (
        <H1>Hay algunas mascotas</H1>
      )} */}
      <PetCardEdit/>
    </>
  );
};
