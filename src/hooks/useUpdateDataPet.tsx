import React,{useEffect} from 'react'
import { useRecoilState } from 'recoil'
import { uploadImagePet } from '../lib/Pets'
import { dataUsuario } from './atoms'
import { petCoords, petUrlImage, selectedPet, stateOfPet } from './petData'
import { updateDataDB,updateDataAlgolia } from '../lib/Pets'
import { useNavigate } from 'react-router-dom'

export const useUpdateDataPet = () => {
    let navegate = useNavigate()
    let [data,setData] = useRecoilState(dataUsuario)
    const [url,setUrl] = useRecoilState(petUrlImage)
    const [coords,setCoords] = useRecoilState(petCoords)
    const [state,setState] =useRecoilState(stateOfPet)
  let [petSelected,setPetSelected] = useRecoilState(selectedPet)

    useEffect(()=>{
        return ()=>{
            setState(false)
            setPetSelected("")
        }
    },[])
    async function hadlerUpdateSubmit(e:Event,id:number){
        e.preventDefault()
        const target:any = e.target
        const name = target.Nombre.value
        let urlImageCloudynari = await uploadImagePet(data.token,url)
        let urlSecure = urlImageCloudynari.url
        let datosPetDB = {
            name:name,
            img:urlSecure,
            lng:(coords as any).longitude,
            lat:(coords as any).latitude,
            state
        }
        let updateDb = await updateDataDB(data.token,datosPetDB,id)
        let petDataAlgolia = {
            lng:(coords as any).longitude,
            lat:(coords as any).latitude,
            id,
            nombre:name
        }
        let updateAlgolia = await updateDataAlgolia(data.token,petDataAlgolia,id)
        if(updateDb.msg === "Listo" && updateAlgolia){
            navegate("/petsreported")
        }else{
            alert("Hubo un error intente mas tarde")
        }
    }
    
    return {hadlerUpdateSubmit}
}
