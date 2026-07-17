// https://www.greatfrontend.com/blog/frontend-lld-react-machine-coding-questions
// Implementing searchable dropdown

import { useState, useEffect } from 'react';

async function fetchProducts(setIsLoading, searchedText, setItems, setError) {
  setIsLoading(true);

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?q=${searchedText}`, {
      header: {
        'Authorization': 'ABC',
        'Content-Type': 'application/json'
      }
    })
    const products = await response.json();
    setItems(products);
  } catch (error) {
    setError(error?.message ?? 'Something went wrong!');
  } finally {
    setIsLoading(false);
  }
}

function App() {
  const [searchedText, setSearchedText] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  let timer;

  useEffect(() => {
    timer = setTimeout(() => {
      fetchProducts(setIsLoading, searchedText, setItems, setError);
    }, 500)

    if (error) {
      setError('');
    }

    return () => {
      clearTimeout(timer);
    }
  }, [searchedText])

  // useEffect(() => {
  //   const filteredItems = items.filter((item) => item.title.includes(searchedText));
  //   setSearchedItems(filteredItems);
  // }, [items, searchedText])

  return (
    <>
      <SearchBar searchedText={searchedText} setSearchedText={setSearchedText} />
      <SearchList items={items} isLoading={isLoading} />
    </> 
  )
}

function SearchBar({ searchedText, setSearchedText }) {
  return (
    <div>
      <input
        type="text"
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
        tabIndex={0}
        aria-label="Search something"
      />
    </div>
  )
}

function SearchList({ items, isLoading }) {
  console.log(items);
  return (
    <div>
      {isLoading ? (
        <p>
          Loading...
        </p>
      ) : (items.length > 0) ? (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.title}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default App
