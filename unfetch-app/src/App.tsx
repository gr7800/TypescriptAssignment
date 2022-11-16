import React from 'react';
import './App.css';
import useFetch from './hooks/usefetch';

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const url = `http://jsonplaceholder.typicode.com/posts`

function App() {
  const { data, error } = useFetch<Post[]>(url)

  if (error) return <p>There is an error.</p>
  if (!data) return <p>Loading...</p>
  return (
    <div className="App">
      <header className="App-header">
      {
        data.map((g)=>(
          <div>
            <h1>{g.title}</h1>
            <p>{g.body}</p>
          </div>
        ))
      }
      </header>
    </div>
  );
}

export default App;
