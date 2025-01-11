import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hookes/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hookes/usePopularMovies";
import useUpcomingMovies from "../hookes/useUpcomingMovies";
import useTopRatedMovies from "../hookes/useTopRatedMovies";

const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/**
       *  MainContainer
       *    - VideoBackground
       *    - VideoTitle
       * SecondaryContainer
       *    - MoviesList * N
       *      - Cards * N
       */}
    </div>
  );
};

export default Browse;
