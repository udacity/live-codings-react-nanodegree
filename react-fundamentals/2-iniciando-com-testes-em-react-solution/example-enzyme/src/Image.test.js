import React from 'react'
import { shallow } from 'enzyme'
import Image from './Image'

describe('<Image />', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<Image source="" description="" />))
  })
})