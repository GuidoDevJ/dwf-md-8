import React from 'react'
import { UpdateDataUserDB, UpdatePassword } from '../lib/User'

export const useUpdateDataUser = () => {
    async function handlerUpdateDataUser(e:Event,token:string,email:string){
        e.preventDefault()
        const target:any = e.target
        let name = target.nombre.value
        let password = target.password.value
        let repass = target.repass.value
        if(name && password && repass){
            if(password===repass){
                let datosDB = await UpdateDataUserDB(token,{name,email})
                console.log(datosDB)
                let passwordDB = await UpdatePassword(token,{password})
                console.log(passwordDB)
                if(datosDB.res && datosDB.res){
                    alert("Datos Modificados Correctamente")
                }else{
                    alert("Ocurrio un error")
                }
            }else{
                console.log("Contraseñas incorrectas")
            }
        }
    }
    return {handlerUpdateDataUser}
}
