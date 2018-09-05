import { takeLatest, all } from 'redux-saga/effects'
import types from '@config/constants'

import * as unitSagas from './units'
import * as unitTypesSagas from './unitTypes'

export default function * rootSaga () {
  yield all([
    takeLatest(types.GET_UNITS_REQUEST, unitSagas.requestUnits),
    takeLatest(types.GET_UNIT_TYPES_REQUEST, unitTypesSagas.requestUnitTypes)
  ])
}