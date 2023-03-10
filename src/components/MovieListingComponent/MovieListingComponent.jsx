import React from "react";
import "./MovieListingComponent.scss";
import { useSelector } from "react-redux";
import MovieCardComponent from "../MovieCardComponent/MovieCardComponent";


function MovieListingComponent() {
  const { movies } = useSelector((state) => state.movies);
  return (
    <div className="movie-container">
      {movies && movies.map((movie) => (
        <MovieCardComponent key={movie.imdbID} movie={movie}/>
      ))}
    </div>
  );
}

export default MovieListingComponent;
