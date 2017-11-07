/* eslint-disable no-undef */
import React from 'react'
import {withProps, lifecycle, compose} from 'recompose'
import SearchBox from 'react-google-maps/lib/components/places/SearchBox'
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps'

// const Map = withScriptjs(withGoogleMap((props) => {
//     return(
        // <GoogleMap defaultZoom={9} center={{lat: 41.9, lng: -87.624}}>
        //     <Marker position={{lat: 41.9, lng: -87.624}}/>
        // </GoogleMap>
//     )
// }))

const MapsWithASearchBox = compose(
    withProps({
        googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDr2XPy0JVf00LBuJzG0611ZreDARqIJs8&v=3.exp&libraries=geometry,drawing,places',
        containerElement: (<div style={{height: `100%`}}/>),
        mapElement: (<div style={{height: `400px`}} />),
        loadingElement: (<div style={{height: `100%`}}/>)
    }),
    lifecycle({
        componentDidMount () {
            const refs = {}

            this.setState({
                bounds: null,
                center: {
                    lat: 41.9, 
                    lng: -87.624
                },
                // Map Functions
                onMapMounted: ref => {
                    refs.map = ref
                },
                onBoundsChange: () => {
                    this.setState({
                        bounds: ref.map.getBounds(),
                        center: ref.map.getCenter()
                    })
                },
                onSearchBoxMounted: ref => {
                    refs.searchBox = ref
                },
                onPlacesChanged: () => {
                    const places = refs.searchBox.getPlaces()
                    const bounds = new google.maps.LatLngBounds()

                    const nextPlaces = places.map(place => ({
                        position: place.geometry.location
                    }))

                    this.setState({
                        center: nextPlaces[0].position,
                        marker: nextPlaces[0].position
                    })
                }
            })
        }
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap {...{
        center: props.center,
        ref: props.onMapMounted,
        bounds: props.bounds,
        controlPosition: google.maps.ControlPosition.TOP_LEFT,
        defaultZoom: 10,
        onBoundsChange: props.onBoundsChange
    }}>
        <SearchBox {...{
            ref: props.onSearchBoxMounted,
            bounds: props.bounds,
            controlPosition: google.maps.ControlPosition.TOP_LEFT,
            onPlacesChanged: props.onPlacesChanged
        }}>
            <input placeholder={'Buscar aqui'} 
                    style={{
                        width: `200px`,
                        height: `20px`,
                        borderRadius: `5px`,
                        margin: `10px`
                    }}
            />
        </SearchBox>
        <Marker position={props.center}/>
    </GoogleMap>
)

export default MapsWithASearchBox