import React from 'react';
import { shallow } from 'enzyme';
import If from './If';

describe('[Component] If', () => {
  const children = <p>Hello, World!</p>;

  it('renders null if test is false', () => {
    const wrapper = shallow(<If test={false} children={children} />);
    expect(wrapper.getElement()).toEqual(null);
  });

  it('renders children if test is true', () => {
    const wrapper = shallow(<If test={true} children={children} />);
    expect(wrapper.getElement()).toEqual(children);
  });
});
