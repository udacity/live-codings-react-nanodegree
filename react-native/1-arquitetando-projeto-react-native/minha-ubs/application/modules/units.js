import { createAction, handleActions } from 'redux-actions'
import types from '@config/constants'

const initialState = {
  fetching: true,
  fetched: false,
  collection: []
}

export const requestUnits = createAction(types.GET_UNITS_REQUEST)
export const fulfillUnits = createAction(types.GET_UNITS_FULFILLED)

export default handleActions({
  [types.GET_UNITS_REQUEST]: state => ({
    ...state,
    fetched: false,
    fetching: true
  }),

  [types.GET_UNITS_FULFILLED]: (state, { payload }) => ({
    ...state,
    fetching: false,
    fetched: true,
    collection: payload.d.filter((_, index) => index % 10 === 0)
  })
}, initialState)