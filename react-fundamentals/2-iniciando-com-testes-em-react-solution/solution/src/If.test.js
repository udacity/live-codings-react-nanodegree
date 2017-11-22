import React from 'react'
import { shallow } from 'enzyme'
import If from './If'

describe('<If />', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<If />))
  })
})