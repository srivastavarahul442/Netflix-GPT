import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constent";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMoviesVideo = (movieId) => {
  const dispatch = useDispatch();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
  const getMovieVideos = async () => {
    const data = await fetch(url, API_OPTIONS);
    const jsonData = await data.json();

    const filterData = jsonData.results.filter(
      (video) => video.type == "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    dispatch(addTrailerVideo(trailer));
    console.log(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMoviesVideo;
