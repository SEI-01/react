import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoaindg] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoaindg(false);
    console.log(json.data.movies);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <div className={styles.container}>
          {movies.map((m) => (
            <Movie
              key={m.id}
              id={m.id}
              title={m.title_long}
              coverImg={m.medium_cover_image}
              summary={m.summary}
              rating={m.rating}
              genres={m.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
