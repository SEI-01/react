import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import Header from "../components/Header";

function Home() {
  const [rating, setRating] = useState(8);
  const [sorting, setSorting] = useState("year");
  const [genres, setGenres] = useState("all");
  const [query, setQuery] = useState("");

  const onChangeRating = (event) => {
    setRating(event.target.value);
  };
  const onChangeSorting = (event) => {
    setSorting(event.target.value);
  };
  const onChangeGenres = (event) => {
    setGenres(event.target.value);
  };
  const onChangeQuery = (event) => {
    setQuery((current) => event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target[0].value);
    searchMovie();
  };

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    setQuery((current) => "");
    setLoading(true);
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}&sort_by=${sorting}&genre=${genres}`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  const searchMovie = async () => {
    setLoading(true);
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?query_term=${query}`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, [rating, sorting, genres]);

  return (
    <div className="App">
      {loading ? (
        <>
          <Header
            rating={rating}
            sorting={sorting}
            genres={genres}
            query={query}
            onChangeRating={onChangeRating}
            onChangeSorting={onChangeSorting}
            onChangeGenres={onChangeGenres}
            onChangeQuery={onChangeQuery}
            onSubmit={onSubmit}
          />
          <div className={styles.loading}>Loading...</div>
        </>
      ) : (
        <>
          <Header
            rating={rating}
            sorting={sorting}
            genres={genres}
            query={query}
            onChangeRating={onChangeRating}
            onChangeSorting={onChangeSorting}
            onChangeGenres={onChangeGenres}
            onChangeQuery={onChangeQuery}
            onSubmit={onSubmit}
          />
          {movies ? (
            <div className={styles.container}>
              {movies.map((m) => (
                <Movie
                  key={m.id}
                  id={m.id}
                  url={m.url}
                  title={m.title_long}
                  coverImg={m.medium_cover_image}
                  summary={m.summary}
                  rating={m.rating}
                  genres={m.genres}
                />
              ))}
            </div>
          ) : (
            <div className={styles.loading}>NO RESULT</div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
