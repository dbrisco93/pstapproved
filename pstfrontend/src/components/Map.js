import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    // InfoWindow
} from '@react-google-maps/api'
import Mapstyles from '../Mapstyles'
// import usePlacesAutocomplete, {
//     getGeocode,
//     getLatLng,
//   } from "use-places-autocomplete";
//   import {
//     Combobox,
//     ComboboxInput,
//     ComboboxPopover,
//     ComboboxList,
//     ComboboxOption,
//   } from "@reach/combobox";
const libraries = ['places'];

const mapContainerStyle = {
    width: '50vw',
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
      <div className="RestaurantContainer">


        <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onLoad={onMapLoad}
        >
            {/* map through locations here also add onclick outside to show modal */}
            {props.restaurants.map((marker) => (
                <Marker
                    key={`${marker.lat}-${marker.lng}`}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    onClick={() => {
                      setSelected(marker);
                    }}
                    />
            ))}


            {/* add info window with info here */}

    

        </GoogleMap>
      </div>
    )
  }