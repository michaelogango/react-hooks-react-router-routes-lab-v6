import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => {
        
        if (data.movies && Array.isArray(data.movies)) {
          setMovies(data.movies);
        } else {
          console.error("Fetched data does not contain a 'movies' array:", data);
        }
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} title={movie.title} id={movie.id} />
          ))
        ) : (
          <p>No movies available</p>
        )}
      </main>
    </>
  );
}

export default Home;
