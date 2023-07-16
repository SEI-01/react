import { useEffect, useState } from "react";

function App() {
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

  console.log(movies.map((m) => m.id));

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((m) => (
            <div key={m.id}>
              <h4>{m.title}</h4>
              <img
                alt={m.title}
                src={m.medium_cover_image}
                style={{ width: 115, height: 172.5 }}
              ></img>
              <p>{m.summary}</p>

              <strong>genres</strong>
              <ul>
                {m.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
