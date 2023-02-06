import React, { useState } from "react";
import { Btn } from "../ui/Btn";
import ContImg from "../ui/ContImg";
import styles from "./PetCard.module.css";
import {AiFillEdit} from "react-icons/ai"
import { Link } from "react-router-dom";
import { useGetDataPet } from "../hooks/useGetDataPet";
export const PetCardEdit = ({ url,name,id }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={url} />
      </div>
      <div className={styles.data}>
        <div className={styles.names}>
          <h2>{name}</h2>
        </div>
        <div className={styles.edit}>
          <Link to={`/editpet/${id}`}><AiFillEdit className={styles.icon}/></Link>
            
        </div>
      </div>
    </div>
  );
};
