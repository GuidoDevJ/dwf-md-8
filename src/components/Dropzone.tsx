import { url } from "inspector";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useRecoilState, useSetRecoilState } from "recoil";
import { petUrlImage } from "../hooks/petData";
import { Btn } from "../ui/Btn";
import css from "./Dropzone.module.css";

export const Dropzone = () => {
  const [images, setImages] = useState([] as any);

  const SetUrl = useSetRecoilState(petUrlImage);

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
    console.log(images[images.length - 1]);
    SetUrl(images[images.length - 1]);
  }, [images]);

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
      <Btn type="button" onClick={open} color="#97EA9F">
        agregar/modificar foto
      </Btn>
    </>
  );
};
