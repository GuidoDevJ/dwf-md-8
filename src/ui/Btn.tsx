import React from 'react'
import css from "./Btn.module.css"
export const Btn = ({children,color,onClick}:any) => {
  return (
    <button className={css.btn} style={{backgroundColor:color}} onClick={onClick}>{children}</button>
  )
}
