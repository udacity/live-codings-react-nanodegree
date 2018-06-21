import {
  START_FETCHING,
  THROW_ERROR,
  UPDATE_GAMES,
} from '../actionTypes';

const initialState = {
  error: false,
  fetching: false,
  games: [],
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return { ...state, error: false, fetching: true };
    case THROW_ERROR:
      return { ...state, error: true, fetching: false };
    case UPDATE_GAMES:
      return { ...state, games: action.games, fetching: false };
    default:
      return state;
  }
};

export default app;
