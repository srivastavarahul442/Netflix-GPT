import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-40 relative z-20 ml-3">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Trending" movies={movies.topRatedMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
        <MovieList title="TV Showes" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
