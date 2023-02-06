import React, { useCallback, useEffect, useRef, useState } from "react";
import Map, { Marker, useMap, MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import searchApi from "../helpers/searchApi";
import { H3 } from "../ui/H3";
import { InputLabel } from "../ui/InputLabel";
import { useRecoilState } from 'recoil';
import { petCoords } from '../hooks/petData';
const initialValue={
  latitude:-27.461195,
  longitude:-58.836841
}

export const Mapbox = () => {
  
 const [coords,setCoords] = useRecoilState(petCoords)
 
  const mapRef = useRef<MapRef>(null);
  const onSelectCity = useCallback(({ longitude, latitude }: any) => {
    mapRef.current?.flyTo({ center: [longitude, latitude], duration: 2000 });
  }, []);

  useEffect(() => {
    onSelectCity({
      longitude: coords.longitude,
      latitude: coords.latitude,
    });
    
  }, [coords]);

  useEffect(()=>{
    return()=>{
      setCoords({
        ...coords,
        ...initialValue
      })
    }
  },[])


  const debounceRef = useRef<NodeJS.Timeout>();
  const setSearchQuery = async (e: any) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      if (e.target.value !== "") {
        const res = await searchApi.get(`/${e.target.value}.json`);
        setCoords({
          ...coords,
          latitude: res.data.features[0].center[1],
          longitude: res.data.features[0].center[0],
          zoom: 14,
        });
      }
    }, 1000);
  };
  const handleAddClick = (e: any) => {
    setCoords({
      ...coords,
      latitude: e.lngLat.lat,
      longitude: e.lngLat.lng,
    });
    console.log(e.lngLat);
  };

  return (
    <>
      <Map
        ref={mapRef}
        initialViewState={coords}
        mapboxAccessToken={
          "pk.eyJ1IjoiZ3VpZG9kZXZqc2pyIiwiYSI6ImNsYng0ZG13MjE4b2Ezb3FvaWdlOWx2bjIifQ.u6htqs0dnoZ48UArWEAAxQ"
        }
        style={{ width: '100%', height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onClick={(e) => handleAddClick(e)}
      >
        <Marker
          longitude={coords.longitude}
          latitude={coords.latitude}
          anchor="bottom"
        ></Marker>
      </Map>
      <InputLabel name="ubication" textLabel="Ubicacion" type="text" onChange={setSearchQuery}/>
      <H3>
        Buscá un punto de referencia para reportar a tu mascota. Puede ser una
        dirección, un barrio o una ciudad.
      </H3>
    </>
  );
};
