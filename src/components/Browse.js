import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hookes/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  
  useNowPlayingMovies();
  
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
