export const startFetching = () => ({ type: 'START_FETCHING' })
export const throwError = () => ({ type: 'THROW_ERROR' })
export const updateItems = items => ({ type: 'UPDATE_ITEMS', items })

export function getData(dataType) {
  return dispatch => {
    dispatch(startFetching())
    return fetch('https://swapi.co/api/' + dataType)
      .then(res => res.json())
      .then(data => dispatch(updateItems(data.results)))
      .catch(err => dispatch(throwError()))
  }
}