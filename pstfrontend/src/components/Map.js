import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api'
import Mapstyles from '../Mapstyles'
import { Icon } from 'semantic-ui-react'

const libraries = ['places'];

const mapContainerStyle = {
    width: '70vw',
    height: '100vh',
}

const center = {
    lat: 29.81242,
    lng: -95.37398
}

const options = {
    styles: Mapstyles,
    disableDefaultUI: true,
    zoomControl: true
}




export default function Map(props) {
  const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries,
   })
  const [selected, setSelected] = React.useState(null);
  const mapRef = React.useRef();

const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
    }, [])
  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Maps Loaded";

    return (
      <div className="MapContainer">


        <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
        options={options}
        onLoad={onMapLoad}
        >
            {props.restaurants.map((marker) => (
                <Marker
                    key={`${marker.lat}-${marker.lng}`}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    onClick={() => {
                      setSelected(marker);
                    }}
                  />
            ))}

            {
              selected ? (
                <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => {
                  setSelected(null);
                }}
                >
                  <div className="map-marker">
                    <h3>{selected.name}</h3>
                    <h3>{selected.address}</h3>
                    <h3><a href={selected.apple_url} target="_blank" rel="noopener noreferrer">Apple Maps</a></h3>
                    <h3><a href={selected.ig_url} target="_blank" rel="noopener noreferrer"><Icon name="instagram"></Icon> {selected.ig}</a></h3>

                  </div>
                </InfoWindow>
              ) : null}
            


            {/* add info window with info here */}

    

        </GoogleMap>
      </div>
    )
  }