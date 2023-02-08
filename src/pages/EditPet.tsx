import React,{useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Dropzone } from '../components/Dropzone';
import { Header } from '../components/Header';
import { Mapbox } from '../components/Mapbox';
import { dataUsuario } from '../hooks/atoms';
import { selectedPet, stateOfPet } from '../hooks/petData';
import { useGetDataPet } from '../hooks/useGetDataPet';
import { useUpdateDataPet } from '../hooks/useUpdateDataPet';
import { Btn } from '../ui/Btn';
import { H1 } from '../ui/H1';
import { InputLabel } from '../ui/InputLabel';
import css from "./Report.module.css";

export const EditPet = () => {
  const navegate = useNavigate()
  let [data,setData] = useRecoilState(dataUsuario)
  useEffect(()=>{
    if(data.token === ""){
      navegate("/")
    }
  },[])
  let setState = useSetRecoilState(stateOfPet)
  let datos = useGetDataPet()
  let {hadlerUpdateSubmit} = useUpdateDataPet()
  let [petSelected,setPetSelected] = useRecoilState(selectedPet)

    return (
        <>
          <div className={css.container}>
            <Header />
            <form className={css.container_body} onSubmit={(e:any)=>hadlerUpdateSubmit(e,petSelected.id)}>
              <H1>Editar Mascota Perdida</H1>
              <label htmlFor="Nombre"></label>
              <InputLabel name="Nombre" textLabel="Nombre" type="text" namePetOrUser={petSelected.name}/>
              <Dropzone img={petSelected.img} />
              <Mapbox/>
              <Btn color="#FF9DF5">Guardar</Btn>
              <Btn color="##97EA9F"onClick={(e:Event)=>{
                e.preventDefault()
                setState(true)
              }} >Reportar como encontrado</Btn>
              <Link to={"/petsreported"} className={css.link}>Despublicar</Link>
            </form>
          </div>
        </>
      );
}
