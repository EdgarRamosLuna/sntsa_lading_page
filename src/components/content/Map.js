import React, { useEffect, useRef } from 'react';

import Image from './logo2.png'
function Map({ lat, lng, place }) {
  const mapRef = useRef(null);
  const googleMaps = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);

  useEffect(() => {
    loadGoogleMapsApi().then(() => {
      initMap();
    });
  }, []);

  function loadGoogleMapsApi() {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${"AIzaSyAc_fWC63FYIV8dwbn3k17PICrN9A-HpHw"}`;
      script.onload = () => {
        googleMaps.current = window.google.maps;
        resolve();
      };
      document.body.appendChild(script);
    });
  }

  function initMap() {
    map.current = new googleMaps.current.Map(mapRef.current, {
      center: { lat, lng },
      zoom: 13,
      streetViewControl: true, // agregar el control de Street View al mapa
    });

    marker.current = new googleMaps.current.Marker({
      position: { lat, lng },
      map: map.current,
    });

//    <img src="${Image}" alt="Logo del lugar" />
    if (place) {
      const contentString = `
        <div style="max-width: 200px; text-align:center;" class="map-info">
          <h3>${place.name}</h3>
          <p>${place.description}</p>
        </div>
      `;

      const infoWindow = new googleMaps.current.InfoWindow({
        content: contentString,
      });

      marker.current.addListener('click', () => {
        infoWindow.open(map.current, marker.current);
      });

      infoWindow.open(map.current, marker.current);
    }
  }

  function openStreetView() {
    const panorama = map.current.getStreetView();
    panorama.setPosition(marker.current.getPosition());
    panorama.setPov({ heading: 0, pitch: 0 });
    panorama.setVisible(true);
  }

  return (
    <>
      <div ref={mapRef} style={{ height: '500px' }} />
      {/*<button className='s-view'  onClick={openStreetView}>Ver Street View</button>*/}
    </>
  );
}

export default Map;
