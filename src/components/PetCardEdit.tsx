import React, { useState } from "react";
import { Btn } from "../ui/Btn";
import ContImg from "../ui/ContImg";
import styles from "./PetCard.module.css";
import {AiFillEdit} from "react-icons/ai"
import { Link } from "react-router-dom";
export const PetCardEdit = ({ url }: any) => {

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={url} />
      </div>
      <div className={styles.data}>
        <div className={styles.names}>
          <h2>Nombre del perro</h2>
        </div>
        <div className={styles.edit}>
          <Link to={"/editpet/1"}><AiFillEdit className={styles.icon}/></Link>
            
        </div>
      </div>
    </div>
  );
};
