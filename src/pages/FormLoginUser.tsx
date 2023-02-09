import { Btn } from "../ui/Btn";
import ContImg from "../ui/ContImg";
import { Input } from "../ui/Input";
import userImg from "../assets/user.png";
import styles from "./FormLoginUser.module.css";
import { Helper } from "../ui/Helper";
import { useSingIn } from "../hooks/useSingIn";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { useEffect } from "react";
dotenv.config()
const emailInput = {
  typeInput: "email",
  name: "email",
};
const passInput = {
  typeInput: "password",
  name: "password",
};

export const FormLoginUser = () => {
const {handlerSubmit} = useSingIn()
useEffect(()=>{
  console.log(process.env.MAPBOX_TOKEN)
})
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e: any) => handlerSubmit(e)}>
        <ContImg url={userImg} />
        <div className={styles.input}>
          <Input {...emailInput} />
          <Input {...passInput} />
        </div>
        <Btn color="#F8FFAB">Ingresar</Btn>
        <div className={styles.helper}>
          <Helper />
        </div>
      </form>
    </div>
  );
};
