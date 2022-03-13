import React from 'react'

function FeedbackItem({ rating, text, key }) {
    

    return (
        <div className='card' key={key}>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </div>
    )
}

export default FeedbackItem