import React,{useEffect} from 'react'
import { useRecoilState } from 'recoil';
import { getDataUser } from '../lib/User';
import { dataUsuario } from './atoms';

export const useGetUserData = () => {
    const [userData, setDataUser] = useRecoilState(dataUsuario);
  
  useEffect(()=>{
    console.log("Hola home")
    console.log(userData.token)
    getDataUser(userData.token)
      .then(datos=>{
        setDataUser({
          ...userData,
          name:datos.name
        })
      })
  },[])

}
