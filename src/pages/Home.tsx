import {useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { PetCard } from "../components/PetCard";
import { coordUser, dataUsuario } from "../hooks/atoms";
import { useUsersPets } from "../hooks/useReportPetsNear";
import { getDataUser } from "../lib/User";
import { Btn } from "../ui/Btn";
import css from "./Home.module.css";

export const Home = () => {
  const navegate = useNavigate()
  let [data,setData] = useRecoilState(dataUsuario)
  useEffect(()=>{
    if(data.token === ""){
      navegate("/")
    }
  },[])
  
  const {giveCoords,pet,find} = useUsersPets()
    return (
    <>
      <Header />
      {find ? <Loader/>:  <div className={css.container}>
        <h1>Mascotas perdidas cerca tuyo</h1>
        <p className={pet.length > 0 ? css.hidden : css.text}>
          Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
          conocer tu ubicación.
        </p>
        <div className={pet.length > 0 ? css.hidden : css.btn__container}>
          <Btn color="#FF9DF5" onClick={giveCoords}>Dar mi ubicacion</Btn>
        </div>
          
        <div className={css.cards}>
          { pet.length > 0 ?pet.map((dog:any)=>
            <PetCard url={dog.img} name={dog.name} email={dog.email} key={dog.id}></PetCard>
            ) :null}
        </div>
      </div>}
      
    </>
  );
};
