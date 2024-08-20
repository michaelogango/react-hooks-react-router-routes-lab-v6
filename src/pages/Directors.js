import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((response) => response.json())
      .then((data) => {
        // Assuming the JSON structure you provided
        if (data.directors && Array.isArray(data.directors)) {
          setDirectors(data.directors);
        } else {
          console.error("Fetched data does not contain a 'directors' array:", data);
        }
      })
      .catch((error) => console.error("Error fetching directors:", error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.length > 0 ? (
          directors.map((director) => (
            <article key={director.id}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>No directors available</p>
        )}
      </main>
    </>
  );
}

export default Directors;
