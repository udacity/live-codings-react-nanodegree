import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getGames } from './actions';
import countryFlag from './utils/country-flag';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getGames();
  }

  render() {
    const { error, fetching, games } = this.props;

    return (
      <div className="App">
        <h2 className="App__title">
          {new Date().toJSON().slice(0, 10)} World Cup Games
        </h2>
        {fetching && (
          <div className="App__fetching">
            <h3>Loading...</h3>
          </div>
        )}
        {error && (
          <div className="App__error">
            <h3>Ops, something went wrong...</h3>
            <button>Try again!</button>
          </div>
        )}
        {games && games.map(game => (
          <div className="App__game" key={game.fifa_id}>
            <h3>{`${game.venue} - ${game.location}, ${game.datetime.slice(11)}`}</h3>
            <h4>
              <span>
                {countryFlag[game.home_team.code]}
              </span>
              {game.home_team.code}: {game.home_team.goals}
            </h4>
            <h4>
              <span>
                {countryFlag[game.away_team.code]}
              </span>
              {game.away_team.code}: {game.away_team.goals}
            </h4>
            <br />
          </div>
        ))}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  error: state.error,
  fetching: state.fetching,
  games: state.games,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getGames,
}, dispatch);

App.propTypes = {
  error: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  games: PropTypes.array.isRequired,
  getGames: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
