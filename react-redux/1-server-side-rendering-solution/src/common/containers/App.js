import React from 'react';
import { connect } from 'react-redux';

const App = () => (<div>oi, mundo</div>);

function mapStateToProps(state) {
  return {
    example: state.exampleReducer,
  };
}

export default connect(mapStateToProps)(App);
