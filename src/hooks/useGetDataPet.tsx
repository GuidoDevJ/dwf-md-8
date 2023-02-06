import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { getPetById } from '../lib/Pets'
import { dataUsuario } from './atoms'
import { petCoords, petUrlImage, selectedPet } from './petData'


export const useGetDataPet = async() => {
    let [dataUser,setDataUser] = useRecoilState(dataUsuario)
    let [petSelected,setPetSelected] = useRecoilState(selectedPet)
    let [urlImg,setUrlImg] = useRecoilState(petUrlImage)
  const [coords,setCoords] = useRecoilState(petCoords)

    let token = dataUser.token
    let params:any = useParams()
    useEffect(()=>{
        getPetById(token,params.id)
            .then(data=>{
                console.log(data)
                setCoords({
                    ...coords,
                    longitude:data.lng,
                    latitude:data.lat
                })
                setUrlImg({url:data.img}as any)
                setPetSelected({...data})
            })  
    },[params.id])
    
}