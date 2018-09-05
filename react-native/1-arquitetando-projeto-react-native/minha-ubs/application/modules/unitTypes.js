import { createAction, handleActions } from 'redux-actions'
import types from '@config/constants'

const initialState = {
  fetching: true,
  fetched: false,
  collection: []
}

export const requestUnitTypes = createAction(types.GET_UNIT_TYPES_REQUEST)
export const fulfillUnitTypes = createAction(types.GET_UNIT_TYPES_FULFILLED)

export default handleActions({
  [types.GET_UNIT_TYPES_REQUEST]: state => ({
    ...state,
    fetched: false,
    fetching: true
  }),

  [types.GET_UNIT_TYPES_FULFILLED]: (state, { payload }) => ({
    ...state,
    fetching: false,
    fetched: true,
    collection: payload.d
  })
}, initialState)
