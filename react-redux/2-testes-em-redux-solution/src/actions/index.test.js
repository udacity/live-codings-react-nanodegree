import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as actions from './index'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('actions', async () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  
  it('startFetching should dispatch a START_FETCHING action', () => {
    expect(actions.startFetching())
      .toEqual({
        type: 'START_FETCHING'
      })
  })

  it('throwError should dispatch a THROW_ERROR action', () => {
    expect(actions.throwError())
      .toEqual({
        type: 'THROW_ERROR'
      })
  })

  it('updateItems should dispath an UPDATE_ITEMS action', () => {
    expect(actions.updateItems({
      items: [
        { title: 'A New Hope', episode_id: 4 }
      ]
    }))
      .toEqual({
        type: 'UPDATE_ITEMS',
        items: [
          { title: 'A New Hope', episode_id: 4 }
        ]
      })
  })
  
  it('successful getData should dispatch START_FETCHING and UPDATE_ITEMS action', () => {
    const store = mockStore({
      fetching: false,
      error: false,
      items: [],
    })
    
    const expectedActions = [
      { type: 'START_FETCHING' }, 
      { type: 'UPDATE_ITEMS', items: [{ title: 'A New Hope', episode_id: 4 }]}
    ]

    fetchMock.get('*', {
      body: {
        results: [
          { title: 'A New Hope', episode_id: 4 }
        ]
      }
    })

    return store.dispatch(actions.getData('films'))
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })

  it('failed getData should dispatch START_FETCHING and THROW_ERROR action', () => {
    const store = mockStore({
      fetching: false,
      error: false,
      items: []
    })
    
    const expectedActions = [
      { type: 'START_FETCHING' }, 
      { type: 'THROW_ERROR'}
    ]

    fetchMock.get('*', { throws: 'Unexpected error!' })
    return store.dispatch(actions.getData('films'))
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })
})

