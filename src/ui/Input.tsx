import React from 'react'

type datosUser = {
    typeInput:string,
    name:string
}

export const Input = ({typeInput,name}:datosUser) => {
  return (
    <input type={typeInput} placeholder={name} name={name}/>
  )
}
