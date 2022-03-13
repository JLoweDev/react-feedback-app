import React from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({ rating, text }) {
    

    return (
        <Card>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    rating: PropTypes.number,
    text: PropTypes.string,
    key: PropTypes.number,
}

export default FeedbackItem