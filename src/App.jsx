import { Footer, Header } from "./components";
import './Styles.css';
import { get } from "./services";
import { useEffect, useState } from "react";
import CardMovies from "./components/CardMovies";

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesFilter, setMoviesFilter] = useState([])
  async function getMovies() {
    const movies = await get();
    console.log(movies)
    setMovies(movies.entries);
    setMoviesFilter(movies.entries);
  }

  const handleChange = (event) => {
    if (event.target.value == "" ){
      getMovies();
    }else{
      const movieFiltered = moviesFilter.filter(movie => movie.title.includes( event.target.value) );
      setMovies(movieFiltered);
    }
  };
  
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container_root">
      <Header handleChange={handleChange}/>
      <CardMovies movies={movies} />
      <Footer />
    </div>
  )
}

export default App
