import React from 'react'
import css from "./H3.module.css"
export const H3 = ({children}:any) => {
  return (
    <h3 className={css.h3}>{children}</h3>
  )
}
