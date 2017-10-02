import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapWithASearchBox from './Map'

class App extends Component {

  componentDidMount () {
    fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson')
    .then ((response) => {
      response.json().then((geoResponse) => {
        console.log(geoResponse)
      }).catch(err => console.log(err))
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <MapWithASearchBox 
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDr2XPy0JVf00LBuJzG0611ZreDARqIJs8&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
