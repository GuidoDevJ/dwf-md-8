import React from 'react'
import { useRecoilState } from 'recoil';
import { createPetDB, uploadDataAlgolia, uploadImagePet } from '../lib/Pets';
import { dataUsuario } from './atoms';
import { petUrlImage, petCoords } from './petData';

export const useReportPet = () => {
    let [data,setData] = useRecoilState(dataUsuario)
    let [url,setUrl] = useRecoilState(petUrlImage)
  const [coords,setCoords] = useRecoilState(petCoords)

  async function uploadImage(e:Event){
    e.preventDefault()
    console.log(data.token)
    const target:any = e.target
    let urlImageCloudynari = await uploadImagePet(data.token,url)
    let urlSecure = urlImageCloudynari.url
    let datosPetDB = {
        name:target.Nombre.value,
        img:urlSecure,
        lng:(coords as any).lng,
        lat:(coords as any).lat
    }
    let petId = await createPetDB(data.token,datosPetDB)
    let petDataAlgolia = {
        ...coords,
        id:petId,
        name:target.Nombre.value
    }
    let resultAlgolia = await uploadDataAlgolia(data.token,petDataAlgolia)
    console.log(resultAlgolia)
  }
  return{uploadImage}
}
