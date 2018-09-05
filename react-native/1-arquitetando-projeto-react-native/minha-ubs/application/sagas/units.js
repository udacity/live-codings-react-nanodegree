import { put } from 'redux-saga/effects'
import api, { endpoints } from '@api'

import { fulfillUnits } from '@modules/units'

export function * requestUnits() {
  try {
    const { data } = yield api.get({ url: endpoints.units })
    yield put(fulfillUnits(data))
  } catch(e) {
    console.log(e)
  }
}