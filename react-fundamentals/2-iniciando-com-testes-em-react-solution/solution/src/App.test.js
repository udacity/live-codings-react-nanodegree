import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('[Component] App', () => {
  window.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
  };

  it('initial items state is empty', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state()).toEqual({ items: [] });
  });

  it('mounts correctly', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has two columns correctly', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('ColumnList')).toHaveLength(2);
  });

  it('createTask adds an item to items array in state', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state().items.length).toBe(0);
    wrapper.find('form input').instance().value = 'new task';
    wrapper.find('form button').instance().click();
    expect(wrapper.state().items.length).toBe(1);
  });

  it('updateTask toggles item state to Done ', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      items: [
        { id: 1, title: 'errand to run', status: 'To Do' },
      ],
    });
    wrapper.find('input[type="checkbox"]').simulate('change', { target: { checked: true } });
    expect(wrapper.state().items[0].status).toBe('Done');
  });

  it('updateTask toggles item state back to To Do', () => {
    const wrapper = mount(<App />);
    wrapper.setState({
      items: [
        { id: 1, title: 'errand to run', status: 'Done' },
      ],
    });
    wrapper.find('input[type="checkbox"]').simulate('change', { target: { checked: false } });
    expect(wrapper.state().items[0].status).toBe('To Do');
  });
});