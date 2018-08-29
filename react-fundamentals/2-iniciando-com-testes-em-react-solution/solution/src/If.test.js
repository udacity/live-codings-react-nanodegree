import React from 'react';
import { shallow } from 'enzyme';
import If from './If';

// Beware: this is a very hacky test suite.
describe('[Component] If', () => {
  const children = 'hello, world!'

  it('renders null if test is false', () => {
    const wrapper = shallow(<If test={false} children={children} />);
    expect(wrapper.debug()).toBe("");
  });

  it('renders children if test is true', () => {
    const wrapper = shallow(<If test={true} children={children} />);
    expect(wrapper.debug()).toEqual(children);
  });
});