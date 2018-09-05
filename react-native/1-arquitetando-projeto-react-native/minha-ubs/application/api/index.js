import axios from 'axios'
import { PRODAM_KEY } from '@config'

export const endpoints = {
  units: '/iv6ab',
  unitTypes: '/6et2z'
}

const request = params => method => (
  axios({
    baseURL: 'https://api.myjson.com/bins',
    headers: { Authorization: `Bearer ${PRODAM_KEY}` },
    method,
    ...params
  })
)

export default {
  get:    params => request(params)('GET'),
  post:   params => request(params)('POST'),
  put:    params => request(params)('PUT'),
  delete: params => request(params)('DELETE')
}
