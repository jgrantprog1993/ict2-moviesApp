import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {  getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);
  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('Must Watch', JSON.stringify(mustWatch))

  const addToMustWatch = (movieId) => null;

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Upcoming  Movies'
      movies={movies}
      // selectFavourite={addToMustWatch}
    />
  );
};

export default UpcomingMoviesPage;