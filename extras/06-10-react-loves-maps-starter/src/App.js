import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapsWithASearchBox from './Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapsWithASearchBox {...{
         // googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDr2XPy0JVf00LBuJzG0611ZreDARqIJs8&v=3.exp&libraries=geometry,drawing,places',
        //  containerElement: (<div style={{height: `100%`}}/>),
         // mapElement: (<div style={{height: `400px`}} />),
        //  loadingElement: (<div style={{height: `100%`}}/>)
        }}
        />
      </div>
    );
  }
}

export default App;
