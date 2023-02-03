import React from "react";
import "./ContImg.css"
type img = {
    url:string
}

const ContImg = ({url}:img) => {
  return (
    <>
      <div className="img">
        <img src={url}/>
      </div>
    </>
  );
};

export default ContImg;
