import React from "react";
import { BallTriangle } from "react-loader-spinner";
import css from "./Loader.module.css"
let style = {
  backGroundColor: "ddd",
};
export const Loader = () => {
  return (
    <div className={css.container_loader}>
         <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{} as any}
      wrapperStyle={style}
      visible={true}
    />
    </div>
   
  );
};
