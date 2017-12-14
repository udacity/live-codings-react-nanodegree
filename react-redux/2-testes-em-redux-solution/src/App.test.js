import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'

describe('<App />', () => {
  const getData = jest.fn()
  
  it('shallow renders correctly', () => {
    expect(shallow(<App
    fetching={false}
    error={false} 
    items={[]}
    getData={getData} />))
  })

  it('calls getData on button click', () => {
    const wrapper = mount(<App 
      fetching={false}
      error={false}
      items={[]}
      getData={getData} />)
    
    wrapper.find('button').simulate('click')
    expect(getData).toHaveBeenCalledTimes(1)
    expect(getData).toHaveBeenCalledWith('films')
  })

  it('renders a h1 tag if error', () => {
    const wrapper = mount(<App 
      fetching={false}
      error={true}
      items={[]}
      getData={getData} />) 
    
    expect(wrapper.find('h1').length).toBe(1)
  })

  it('does not render a h1 tag if fetching data', () => {
    const wrapper = mount(<App 
      fetching={true}
      error={false}
      items={[]}
      getData={getData} />) 
    
    expect(wrapper.find('h1').length).toBe(1)
  })

  it('renders through a list of items and createa a li tag for each one of them', () => {
    const wrapper = mount(<App
      fetching={false}
      error={false}
      items={[{ title: 'A New Hope', episode_id: 4 }]}
      getData={getData} />)

    expect(wrapper.find('ul li').length).toBe(1)
  })
})

