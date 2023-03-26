import React from 'react'
import MapGoogle from '../components/content/Map'
const place = {
    name: "SNTSA",
    description: "Sindicato Nacional de Trabajadores de la Secretaría de Salud",
    lat: 19.432608,
    lng: -99.133209,
    zoom: 18,
  }
const Map = () => {
  return (
    <MapGoogle lat={19.420900380506993} lng={-99.1655750846574} place={place} />
  )
}

export default Map