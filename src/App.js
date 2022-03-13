import { useState } from 'react'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'

function App() {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 7,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio necessitatibus totam aperiam sint labore! Nihil animi voluptas esse quae harum!'
        },
        {
            id: 2,
            rating: 9,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia, accusantium enim rerum reprehenderit adipisci. Rerum distinctio doloremque maxime amet sit optio. Quod consequuntur ipsa debitis neque sit! Perspiciatis quam deleniti adipisci nesciunt libero similique.'
        },
        {
            id: 3,
            rating: 4,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, odit!'
        },
    ])

    return (
        <>
            <Header text="Hello World" />
            <div className='container'>
                <FeedbackItem />
            </div>
        </>
    ) 
}

export default App