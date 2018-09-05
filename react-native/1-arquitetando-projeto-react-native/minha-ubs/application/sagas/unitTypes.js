import { put } from 'redux-saga/effects'
import api, { endpoints } from '@api'

import { fulfillUnitTypes } from '@modules/unitTypes'

export function * requestUnitTypes() {
  try {
    const { data } = yield api.get({ url: endpoints.unitTypes })
    yield put(fulfillUnitTypes(data))
  } catch(e) {
    console.log(e)
  }
}