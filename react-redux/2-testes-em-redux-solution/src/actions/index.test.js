import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetch from '../__test-helpers__/fetch';
import games from '../__test-helpers__/games';
import {
  START_FETCHING,
  THROW_ERROR,
  UPDATE_GAMES,
} from '../actionTypes';
import * as actions from './';

const mockStore = configureMockStore([ thunk ]);
const store = mockStore({
  error: false,
  fetching: false,
  games: [],
});

describe('action creators', () => {
  it('startFetching should dispatch a START_FETCHING action', () => {
    expect(actions.startFetching())
      .toEqual({ type: START_FETCHING });
  });

  it('throwError should dispatch a THROW_ERROR action', () => {
    expect(actions.throwError())
      .toEqual({ type: THROW_ERROR });
  });

  it('updateGames should dispatch an UPDATE_GAMES action', () => {
    expect(actions.updateGames(games))
      .toEqual({
        type: UPDATE_GAMES,
        games,
      });
  });

  afterEach(() => store.clearActions());

  it('successful getGames calls startFetching and updateGames', () => {
    window.fetch = fetch.successful(games);
    const expectedActions = [
      { type: START_FETCHING },
      { type: UPDATE_GAMES, games },
    ];

    return store.dispatch(actions.getGames())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('failing getGames calls startFetching and throwError', () => {
    window.fetch = fetch.failing();
    const expectedActions = [
      { type: START_FETCHING },
      { type: THROW_ERROR },
    ];

    return store.dispatch(actions.getGames())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
