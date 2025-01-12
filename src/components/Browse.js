import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hookes/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hookes/usePopularMovies";
import useUpcomingMovies from "../hookes/useUpcomingMovies";
import useTopRatedMovies from "../hookes/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* <MainContainer />
      <SecondaryContainer /> */}

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
