import React from 'react'
import PropTypes from 'prop-types'

const App = ({ fetching, error, items, getData }) => (
  <div>
    <button onClick={() => getData('films')}>get star wars movies data</button>
    {error ? <h1>something went wrong</h1> : 
      <div>
        {fetching ? <h1>fetching data</h1> : 
          <ul>
            {items.map(item => 
              <li key={item.episode_id}>
                <h2>{item.title} - {item.release_date}</h2>
              </li>
            )}
          </ul>
        }
      </div>
    }
  </div>
)

App.propTypes = {
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired
}

export default App