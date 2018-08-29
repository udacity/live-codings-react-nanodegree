import React from 'react';
import { mount } from 'enzyme';
import ColumnList from './ColumnList';
import { wrap } from 'module';

describe('[Component] ColumnList', () => {
  const setup = {
    addTask: jest.fn(),
    updateTask: jest.fn(),
  };

  it('renders a form if title is to do', () => {
    const wrapper = mount(<ColumnList title='To Do' {...setup} />);
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('calls addTask on form submission', () => {
    const wrapper = mount(<ColumnList title='To Do' {...setup} />);
    wrapper.find('form').simulate('submit');
    expect(setup.addTask).toHaveBeenCalled();
  });

  it('renders an item for every matching to do', () => {
    const items = [
      { id: 1, status: 'To Do', title: 'Live coding' },
      { id: 2, status: 'Done', title: 'Walk the dog' },
      { id: 3, status: 'To Do', title: 'Post solutions to live coding' },
    ];

    const wrapper = mount(<ColumnList items={items} title='To Do' {...setup} />);
    expect(wrapper.find('li')).toHaveLength(2);
  });

  it('calls updateTask on checkbox change', () => {
    const items = [
      { id: 2, status: 'Done', title: 'Walk the dog' },
    ];

    const wrapper = mount(<ColumnList items={items} title='Done' {...setup} />);
    wrapper.find('li input').simulate('change');
    expect(setup.updateTask).toHaveBeenCalled();
  });
});