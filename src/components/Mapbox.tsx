import React, { useCallback, useEffect, useRef, useState } from "react";
import Map, { Marker, useMap, MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import searchApi from "../helpers/searchApi";
import { H3 } from "../ui/H3";
import { InputLabel } from "../ui/InputLabel";
import { useRecoilState } from 'recoil';
import { petCoords } from '../hooks/petData';
let initialViewState = {
  longitude: -122.4,
  latitude: 37.8,
  zoom: 14,
};

export const Mapbox = ({ lat, lng }: any) => {
  const mapRef = useRef<MapRef>(null);
  const [coords,setCoords] = useRecoilState(petCoords)
  const onSelectCity = useCallback(({ longitude, latitude }: any) => {
    mapRef.current?.flyTo({ center: [longitude, latitude], duration: 2000 });
  }, []);

  const [viewState, SetViewState] = useState(initialViewState);
  const [input, setInput] = useState();

  useEffect(() => {
    console.log("cambiand");
    onSelectCity({
      longitude: viewState.longitude,
      latitude: viewState.latitude,
    });
    setCoords({
      ...coords,
      lng:viewState.longitude,
      lat:viewState.latitude
    })

    console.log(viewState);
  }, [viewState]);

  const debounceRef = useRef<NodeJS.Timeout>();
  const setSearchQuery = async (e: any) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      if (e.target.value !== "") {
        const res = await searchApi.get(`/${e.target.value}.json`);
        console.log(res.data.features[0]);
        SetViewState({
          ...viewState,
          latitude: res.data.features[0].center[1],
          longitude: res.data.features[0].center[0],
          zoom: 14,
        });
      }
    }, 1000);
  };
  const handleAddClick = (e: any) => {
    // const [longitude, latitude] = e.lngLat;
    SetViewState({
      ...viewState,
      latitude: e.lngLat.lat,
      longitude: e.lngLat.lng,
    });
    console.log(e.lngLat);
  };

  return (
    <>
      <Map
        ref={mapRef}
        initialViewState={viewState}
        mapboxAccessToken={
          "pk.eyJ1IjoiZ3VpZG9kZXZqc2pyIiwiYSI6ImNsYng0ZG13MjE4b2Ezb3FvaWdlOWx2bjIifQ.u6htqs0dnoZ48UArWEAAxQ"
        }
        style={{ width: '100%', height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onClick={(e) => handleAddClick(e)}
      >
        <Marker
          longitude={viewState.longitude}
          latitude={viewState.latitude}
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
