import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    // InfoWindow
} from '@react-google-maps/api'
import Mapstyles from '../Mapstyles'
import '.'
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
    width: '100vw',
    height: '95vh'
}

const center = {
    lat: 29.751579,
    lng: -95.361273
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
      <div className="Map">
          <h1>PST Checkmates <span role="img" aria-label="check">✅</span></h1> 


        <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onLoad={onMapLoad}
        >
            {/* map through locations here also add onclick outside to show modal */}
            {props.restaurants.map((marker) => (
                <Marker
                    key={`${marker.lat}-${marker.lng}`}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    icon={{
                      url: 'https://i1.wp.com/www.internationaldollandteddyshow.com/wp-content/uploads/2019/02/green-check-mark-transparent.jpg?w=300&ssl=1',
                      scaledSize: new window.google.maps.Size(30,30)
                      }}
                    onClick={() => {
                      setSelected(marker)
                    }}
                    />
            ))}


            {/* add info window with info here */}

    

        </GoogleMap>
      </div>
    )
  }