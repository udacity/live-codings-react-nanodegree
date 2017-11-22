import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'

describe('<App />', () => {
  global.localStorage = { getItem: jest.fn(), setItem: jest.fn() }
  const wrapper = mount(<App />)
  afterEach(() => wrapper.setState({ items: []}))

  it('shallow renders without crashing', () => {
    expect(shallow(<App />))
  })

  it('mounts without crashing', () => {
    expect(mount(<App />))
  })

  it('has two ColumnList components', () => {
    expect(wrapper.find('ColumnList').length).toBe(2)
  })

  it('creates a new task', () => {
    expect(wrapper.state().items.length).toBe(0)

    wrapper.find('form input').instance().value = 'new task'
    wrapper.find('form button').instance().click()

    expect(wrapper.state().items.length).toBe(1)
  })

  it('updates a task to done', () => {
    expect(wrapper.state().items.length).toBe(0)

    wrapper
      .setState({
        items: [{ id: 1, title: 'errand to run', status: 'To Do' }]
      })
      .find('input[type="checkbox"]')
      .simulate('change', { target: { checked: true }})

    expect(wrapper.state().items[0].status).toBe('Done')
  })

  it('updates a task to to do', () => {
    expect(wrapper.state().items.length).toBe(0)

    wrapper
      .setState({
        items: [{ id: 1, title: 'errand to run', status: 'Done' }]
      })
      .find('input[type="checkbox"]')
      .simulate('change', { target: { checked: false } })

    expect(wrapper.state().items[0].status).toBe('To Do')
  })
})