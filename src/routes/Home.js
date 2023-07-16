import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoaindg] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoaindg(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((m) => (
            <Movie
              key={m.id}
              title={m.title}
              coverImg={m.medium_cover_image}
              summary={m.summary}
              genres={m.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
