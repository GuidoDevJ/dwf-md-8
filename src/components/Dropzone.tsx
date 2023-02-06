import { url } from "inspector";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { constSelector, useRecoilState, useSetRecoilState } from "recoil";
import { petUrlImage } from "../hooks/petData";
import { Btn } from "../ui/Btn";
import css from "./Dropzone.module.css";

export const Dropzone = ({img}:any) => {
  const [images, setImages] = useState([] as any);

  const [url,SetUrl] = useRecoilState(petUrlImage);

  const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onload = () => {
          setImages((prevState: any) => [...prevState, reader.result]);
        };
        reader.readAsDataURL(file);
      });
    },
    noClick: true,
    noKeyboard: true,
  });
  useEffect(() => {
    SetUrl(images[images.length - 1]);
    
  },[images]);

  useEffect(()=>{
    if(img !== undefined){
      setImages([img])
    }
    return ()=> {
      console.log("Saliendo")
      setImages([])
    }
  },[img])

  return (
    <>
      <div {...getRootProps({ className: css.dropzone })}>
        <input {...getInputProps()} />
        {images.length > 0 ? (
          <img src={images[images.length - 1]} className={css.img} />
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <Btn type="button" onClick={(e:Event)=>{
        e.preventDefault()
        open()
      }} color="#97EA9F">
        agregar/modificar foto
      </Btn>
    </>
  );
};
