import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
  it('shallow renders without crashing', () => {
    expect(shallow(<App />))
  })
})
