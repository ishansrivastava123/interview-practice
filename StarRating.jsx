// https://www.greatfrontend.com/blog/frontend-lld-react-machine-coding-questions
// Question 2: Star rating

import { useState } from 'react';

function App() {
  return (
    <div>
      <StarRenderer stars={8} />
    </div>
  )
}

const StarRenderer = ({ stars = 5 }) => {
  const star = '☆';
  const arrOfStars = [...star.repeat(stars)];
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ display: 'flex', gap: '5px' }}>
        {arrOfStars.map((singleStar, index) => (
          <span
            style={{ 
              cursor: 'pointer',
              color: ((hoveredRating > 0) && ((index + 1) <= hoveredRating)) ? 'white' : ((index + 1) <= rating) ? 'yellow' : 'black'
            }}
            onClick={() => {
              setRating(index + 1);
              setHoveredRating(0);
            }}
            onKeyDown={(e) => {
              if(e.key === "Enter") {
                setRating(index + 1);
                setHoveredRating(0);
              }
            }}
            onMouseEnter={() => setHoveredRating(index + 1)}
            onFocus={() => setHoveredRating(index + 1)}
            onMouseLeave={() => setHoveredRating(0)}
            onBlur={() => setHoveredRating(0)}
            key={index}
            role="button"
            tabIndex={0}
          >
            {singleStar}
          </span>
        ))}
      </div>

      {(rating > 0) ? (
        <span>
          ({rating} / {stars})
        </span>
      ) : null}
    </div>
  )
}

export default App
