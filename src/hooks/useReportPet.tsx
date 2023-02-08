import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { createPetDB, uploadDataAlgolia, uploadImagePet } from '../lib/Pets';
import { dataUsuario } from './atoms';
import { petUrlImage, petCoords } from './petData';
import { useLocalStorage } from './useLocalStorage';

export const useReportPet = () => {
  let navegate = useNavigate();
  const datos = useLocalStorage()

    let [data,setData] = useRecoilState(dataUsuario)
    let [url,setUrl] = useRecoilState(petUrlImage)
  const [coords,setCoords] = useRecoilState(petCoords)

  async function uploadImage(e:Event){
    e.preventDefault()
    const target:any = e.target
    let urlImageCloudynari = await uploadImagePet(data.token,url)
    let urlSecure = urlImageCloudynari.url
    let datosPetDB = {
        name:target.Nombre.value,
        img:urlSecure,
        lng:(coords as any).longitude,
        lat:(coords as any).latitude
    }
    let petId = await createPetDB(data.token,datosPetDB)
    let petDataAlgolia = {
        lng:(coords as any).longitude,
        lat:(coords as any).latitude,
        id:petId,
        name:target.Nombre.value
    }
    let resultAlgolia = await uploadDataAlgolia(data.token,petDataAlgolia)
    navegate("/petsreported")
  }
  return{uploadImage}
}
