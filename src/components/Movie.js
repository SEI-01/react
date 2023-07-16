import PropTypes from "prop-types";

import { Link } from "react-router-dom";

function Movie({ title, coverImg, summary, genres }) {
  return (
    <div>
      <h4>
        <Link to="/movie">{title}</Link>
      </h4>
      <img
        alt={title}
        src={coverImg}
        style={{ width: 115, height: 172.5 }}
      ></img>
      <p>{summary}</p>

      <strong>genres</strong>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
