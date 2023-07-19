import PropTypes from "prop-types";
import styles from "./Movie.module.css";

import { Link } from "react-router-dom";

function Movie({ id, title, coverImg, summary, rating, genres }) {
  return (
    <div className={styles.item}>
      <div>
        <Link to={`/movie/${id}`}>
          <img className={styles.img} alt={title} src={coverImg}></img>
        </Link>
      </div>
      <div className={styles.detail}>
        <h4 className={styles.title}>{title}</h4>

        <p className={styles.summary}>
          {summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}
        </p>
        <div className={styles.rating}>rating: {rating}</div>
        <ul className={styles.genres}>
          {genres.map((g) => (
            <li key={g} className={styles.genre}>
              #{g} &nbsp;
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
