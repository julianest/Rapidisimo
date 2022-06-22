import React, { useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";
import { useEffect } from "react";




const Maps = (busqueda) => {
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState(/**@type google..maps.Map*/ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [distance, setDistance] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [duration, setDuration] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [locationDates, setLocationDates] = useState("");
  const [latit, setLatit] = useState(4.6097);
  const [longit, setLongit] = useState(-74.0817);
  const center = { lat: Number(latit), lng: Number(longit)};
  const zoom = 11;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (busqueda) 
    return setLocationDates(busqueda);

  });
  

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDa3u_6oJQaFtn2n5EbwYHFYpMIknmZilE",
    //process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <span>Cargando...</span>;
  }

  //formula para calcular la ruta
  async function calculateRoute() {
    if (
      locationDates.datBusqueda.address_origin === "" ||
      locationDates.datBusqueda.address_destiny === ""
    ) {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: locationDates.datBusqueda.address_origin,
      destination: locationDates.datBusqueda.address_destiny,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setShowMap(!showMap);
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    setLatit(locationDates.datBusqueda.current_latitude);
    setLongit(locationDates.datBusqueda.current_longitude);
  }

  return (
    <>
      <div>
        
        <button
          className="btn btn-primary btnVerRuta-MasInfo"
          name="verMas"
          type="submit"
          id="button-addon2"
          style={{ color: "white" }}
          onClick={calculateRoute}
        >
          Sigue tu Pedido
        </button>
        
      </div>

      {showMap && (
        <>
        <br />
          {/* <div>
            <span>
              <b>Distance:</b> {distance}
            </span>
            <span>
              <b>Duration:</b> {duration}
            </span>
          </div> */}

          <div style={{ height: "400px", width: "85%" }}>
            <GoogleMap
              center={center}
              zoom={zoom}
              mapContainerStyle={{ height: "400px", width: "85%" }}
              onLoad={(map) => setMap(map)}
            >
              <Marker label={"RP"} zIndex={2} position={center}/>
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </div>
        </>
      )}
    </>
  );
};

export default Maps;
