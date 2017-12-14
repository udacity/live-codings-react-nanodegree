const initialState = {
  items: [],
  fetching: false,
  error: false
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCHING':
      return { ...state, fetching: true }
    case 'THROW_ERROR':
      return { ...state, error: true, fetching: false }
    case 'UPDATE_ITEMS':
      return { ...state, 
        items: action.items,
        fetching: false
      }
    default:
      return state
  }
}

export default app