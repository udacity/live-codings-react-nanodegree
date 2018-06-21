import games from '../__test-helpers__/games';
import {
  START_FETCHING,
  THROW_ERROR,
  UPDATE_GAMES,
} from '../actionTypes';
import app from './';

describe('app reducer', () => {
  it('should handle initial state', () => {
    expect(app(undefined, {}))
      .toEqual({
        error: false,
        fetching: false,
        games: [],
      });
  });

  it('should handle START_FETCHING action', () => {
    expect(app({}, {
      type: START_FETCHING,
    }))
      .toEqual({
        error: false,
        fetching: true,
      });
  });


  it('should handle THROW_ERROR action', () => {
    expect(app({}, {
      type: THROW_ERROR,
    }))
      .toEqual({
        error: true,
        fetching: false,
      });
  });

  it('should handle UPDATE_GAMES action', () => {
    expect(app({}, {
      type: UPDATE_GAMES,
      games,
    }))
      .toEqual({
        fetching: false,
        games,
      });
  });
});
