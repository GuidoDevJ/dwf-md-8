import React from 'react'
import css from "./H1.module.css"
export const H1 = ({children}:any) => {
  return (
    <h1 className={css.title}>{children}</h1>
  )
}
