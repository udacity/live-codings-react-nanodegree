import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import IconSpinner from './icon__spinner.png'

const rotate360 = keyframes`
  from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

const Spinner = styled.img`
  animation: ${rotate360} 2s linear infinite;
  height: 35px;
  padding: 1em;
  width: 35px;
`

const Button = styled.button`
  background-color: black;
  border: none;
  color: white;
  font-size: 28px;
  padding: .5em;
  text-transform: uppercase;
`

const Alert = styled.h2`
  color: red;
`

const Wrapper = styled.div`
  margin: 0 auto;
  width: 50vw;
  text-align: center;
`

const App = ({ fetching, error, items, getData }) => (
  <Wrapper>
    <Button onClick={() => getData("films")}>get star wars movies data</Button>
    {error ? (
      <Alert>
        Ops, the Force wasn't strong enough!
        <span role="img" aria-label="sad face emoji">😕</span>
      </Alert>
    ) : (
      <div>
        {fetching ? (
          <Spinner src={IconSpinner} />
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.episode_id}>
                <h2>
                  {item.title} - {item.release_date}
                </h2>
              </li>
            ))}
          </ul>
        )}
      </div>
    )}
  </Wrapper>
);

App.propTypes = {
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  getData: PropTypes.func.isRequired
}

export default App