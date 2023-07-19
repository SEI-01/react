import { useState } from "react";
import styles from "./Header.module.css";

function Header({
  rating,
  sorting,
  genres,
  query,
  onChangeRating,
  onChangeSorting,
  onChangeGenres,
  onChangeQuery,
  onSubmit,
}) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <label htmlFor="rating" className={styles.label}>
          rating
        </label>
        <select id="rating" onChange={onChangeRating}>
          <option value={5} selected={rating == 5}>
            5↑
          </option>
          <option value={6} selected={rating == 6}>
            6↑
          </option>
          <option value={7} selected={rating == 7}>
            7↑
          </option>
          <option value={8} selected={rating == 8}>
            8↑
          </option>
          <option value={9} selected={rating == 9}>
            9↑
          </option>
        </select>
        {/* <span>{rating}</span> */}
      </div>
      <div className={styles.container}>
        <label htmlFor="sorting" className={styles.label}>
          sort by
        </label>
        <select id="sorting" onChange={onChangeSorting}>
          <option value="year" selected={sorting === "year"}>
            date
          </option>
          <option value="title" selected={sorting === "title"}>
            title
          </option>
          <option value="rating" selected={sorting === "rating"}>
            rating
          </option>
          <option value="like_count" selected={sorting === "like_count"}>
            like count
          </option>
        </select>
        {/* <span>{sorting}</span> */}
      </div>
      <div className={styles.container}>
        <label htmlFor="genres" className={styles.label}>
          genre
        </label>
        <select id="genres" onChange={onChangeGenres}>
          <option value="all" selected={genres === "all"}>
            ALL
          </option>
          <option value="action" selected={genres === "action"}>
            Action
          </option>
          <option value="Adventure" selected={genres === "Adventure"}>
            Adventure
          </option>
          <option value="Animation" selected={genres === "Animation"}>
            Animation
          </option>
          <option value="Comedy" selected={genres === "Comedy"}>
            Comedy
          </option>
          <option value="Crime" selected={genres === "Crime"}>
            Crime
          </option>
          <option value="Drama" selected={genres === "Drama"}>
            Drama
          </option>
          <option value="Fantasy" selected={genres === "Fantasy"}>
            Fantasy
          </option>
          <option value="Horror" selected={genres === "Horror"}>
            Horror
          </option>
          <option value="Mystery" selected={genres === "Mystery"}>
            Mystery
          </option>
          <option value="Romance" selected={genres === "Romance"}>
            Romance
          </option>
          <option value="Sci-Fi" selected={genres === "Sci-Fi"}>
            Sci-Fi
          </option>
          <option value="Thriller" selected={genres === "Thriller"}>
            Thriller
          </option>
        </select>
        {/* <span>{genres}</span> */}
      </div>
      <form onSubmit={onSubmit} className={styles.container}>
        <label htmlFor="query">Search</label>
        <div>
          <input
            value={query}
            onChange={onChangeQuery}
            className={styles.searchBox}
            id="query"
            type="text"
          ></input>
          <button className={styles.searchBtn}>Go</button>
        </div>
      </form>
    </div>
  );
}

export default Header;
