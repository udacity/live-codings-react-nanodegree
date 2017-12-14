import app from './index'

describe('app reducer', () => {
  it('should handle initial state', () => {
    expect(app(undefined, {}))
      .toEqual({
        items: [],
        fetching: false,
        error: false
      })
  })

  it('should handle START_FETCHING action', () => {
    expect(app({}, {
      type: 'START_FETCHING'
    }))
      .toEqual({
        fetching: true
      })
  })

  it('should handle THROW_ERROR action', () => {
    expect(app({}, {
      type: 'THROW_ERROR'
    }))
      .toEqual({
        error: true,
        fetching: false
      })
  })

  it('should handle UPDATE_ITEMS action', () => {
    expect(app({}, {
      type: 'UPDATE_ITEMS',
      items: [
        { title: 'A New Hope', episode_id: 4 }
      ]
    }))
      .toEqual({
        items: [
          { title: 'A New Hope', episode_id: 4 }
        ],
        fetching: false
      })
  })
})