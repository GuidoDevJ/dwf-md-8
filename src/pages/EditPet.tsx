import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { Dropzone } from '../components/Dropzone';
import { Header } from '../components/Header';
import { Mapbox } from '../components/Mapbox';
import { Btn } from '../ui/Btn';
import { H1 } from '../ui/H1';
import { InputLabel } from '../ui/InputLabel';
import css from "./Report.module.css";

export const EditPet = () => {
    let params = useParams()
    console.log(params)
    return (
        <>
          <div className={css.container}>
            <Header />
            <div className={css.container_body}>
              <H1>Editar Mascota Perdida</H1>
              <label htmlFor="Nombre"></label>
              <InputLabel name="Nombre" textLabel="Nombre" type="text"/>
              <Dropzone />
              <Mapbox />
              <Btn color="#FF9DF5">Guardar</Btn>
              <Btn color="##97EA9F">Reportar como encontrado</Btn>
              <Link to={"/petsreported"} className={css.link}>Despublicar</Link>
            </div>
          </div>
        </>
      );
}
