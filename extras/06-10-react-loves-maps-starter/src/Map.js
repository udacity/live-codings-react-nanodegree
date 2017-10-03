import React from 'react'
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps'

const Map = withScriptjs(withGoogleMap((props) => {
    return(
        <GoogleMap defaultZoom={9} center={{lat: 41.9, lng: -87.624}}>
            <Marker position={{lat: 41.9, lng: -87.624}}/>
        </GoogleMap>
    )
}))

export default Map