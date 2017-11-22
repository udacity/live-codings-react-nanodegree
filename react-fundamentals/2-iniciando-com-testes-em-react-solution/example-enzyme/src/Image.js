import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ source, description, width }) => (
  <img 
    src={source} 
    alt={description}
    width={width ? width : 100} />
)

Image.propTypes = {
  source: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  width: PropTypes.number
}

export default Image