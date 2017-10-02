import React from 'react'
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps'

const Map = withScriptjs(withGoogleMap((props) => {
    return(
        <GoogleMap defaultCenter={{ lat: -34.397, lng: 150.644 }} defaultZoom={8}>
        </GoogleMap>
    )
}))

export default Map