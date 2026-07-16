// https://www.greatfrontend.com/blog/frontend-lld-react-machine-coding-questions
// Question 1: Infinite scroll list

import { useEffect, useState } from 'react';

function App() {
  const [images, setImages] = useState([]);
  const [pages, setPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState('');

  async function fetchImages() {
    if (isLoading) return;

    try {
      setIsLoading(true);
      const response = await fetch(`https://api.pexels.com/v1/curated?page=${pages}&per_page=5`, {
        headers: {
          'Authorization': 'zVpY02PsMepvni4XPO1THKS0i86ntKEV00ahdmLGwNoexxcRvnY2NNzx'
        }
      })
      const pics = await response.json();

      setHasMore(() => (pics?.next_page));
      setImages((prev) => ([
        ...prev,
        ...pics.photos
      ]));
    } catch (error) {
      setError(error?.message ?? 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchImages();
  }, [pages])

  useEffect(() => {
    if (!hasMore) return;

    const handleScroll = () => {

    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
   // I need to implement the scrollHeight, scrolling functionality, and setPages increment here 
  }, [hasMore])

  return (
    <div>
      {(error.length > 0) ? (
        <p style={{ color: 'red' }}>
          {error}
        </p>
      ) : (
        <ul>
          {(images.length > 0) && images.map((image) => (
            <div key={image?.id ?? ''}>
              <img src={image?.src?.small ?? ''} />
              <p>{image?.photographer ?? ''}</p>
            </div>
          ))}
          {(isLoading) ? (
            <p>Loading...</p>
          ) : null
          }
        </ul>
      )}
    </div>
  )
}

export default App
