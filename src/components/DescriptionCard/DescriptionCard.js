import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Button from '@components/Button'
import './DescriptionCard.css'
import { navigate } from 'gatsby'

function DescriptionCard({ noCrown, noButton, longDescription, titleStyle, title, description }) {
  return (
    <div className="card-container">
      {
        !noCrown &&
        <div className="horizontal-line" />
      }
      <h1 className="title" style={titleStyle}> {title} </h1>
      <p className={classnames('description', { 'description-long': longDescription })}>{description}</p>
      {
        !noButton &&
        <Button className="action-btn" type={'secondary'} size={'large'} onClick={() => navigate('/collections')}> Collections → </Button>
      }
    </div>
  )
}

DescriptionCard.propTypes = {
  noCrown: PropTypes.bool,
  longDescription: PropTypes.bool,
  noButton: PropTypes.bool,
  titleStyle: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string
}


DescriptionCard.defaultProps = {
  title: ' After all patience, beautiful things await ✨',
  description: 'fuck em, fuck sleep, come clean, zonin’ - fuck popo, police, enemies, fake homies, cant forget that im a OG. suntsets and sunrises buut! dont take life too seriously, nobody makes it out alive.'
}

export default DescriptionCard