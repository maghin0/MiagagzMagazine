import React from 'react'
import PropTypes from 'prop-types'
import './IndexCard.css'

function IndexCard({ index }) {

  function beautify(index) {
    return (index < 10) ? `0${index}` : index;
  }

  return (
    <div className='index-card-container'>
      <span className="index-card-title">Let them do MEE, ugh! please...</span>
      <span className="index-card-index">{beautify(index)}</span>
    </div>
  )
}

IndexCard.propTypes = {
  index: PropTypes.number
}

export default IndexCard
