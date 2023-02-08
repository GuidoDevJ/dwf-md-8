import React,{useEffect} from 'react'
import { useRecoilState } from 'recoil'
import { uploadImagePet } from '../lib/Pets'
import { dataUsuario } from './atoms'
import { petCoords, petUrlImage, selectedPet, stateOfPet } from './petData'
import { updateDataDB,updateDataAlgolia } from '../lib/Pets'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from './useLocalStorage'
import Swal from 'sweetalert2'
import { setTimeout } from 'timers/promises'

export const useUpdateDataPet = () => {
    let navegate = useNavigate()
  const datos = useLocalStorage()

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
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Datos modificados',
                showConfirmButton: false,
                timer: 1500
              })
            navegate("/petsreported")
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Hubo un error intente mas tarde",
              })
            
        }
    }
    
    return {hadlerUpdateSubmit}
}
