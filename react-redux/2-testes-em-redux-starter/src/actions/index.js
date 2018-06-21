import {
  START_FETCHING,
  THROW_ERROR,
  UPDATE_GAMES,
} from '../actionTypes';

export const startFetching = () => ({ type: START_FETCHING });
export const throwError = () => ({ type: THROW_ERROR });
export const updateGames = games => ({ type: UPDATE_GAMES, games });

export function getGames() {
  return dispatch => {
    dispatch(startFetching());

    return fetch('https://world-cup-json.herokuapp.com/matches/today')
      .then(res => res.json())
      .then(data => dispatch(updateGames(data)))
      .catch(err => {
        console.error(err);
        dispatch(throwError())
      });
  };
};
