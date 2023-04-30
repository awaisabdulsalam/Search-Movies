import  { useEffect, useState } from 'react';
import './App.css';
import data from './movies.json';
import Movies from './Movies';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     setMovies(data);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  
  return (
     <div>
     <Movies movies={movies} />
    </div> 
  );
}

export default App;

