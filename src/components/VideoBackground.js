import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useMoviesVideo from "../hookes/useMoviesVideo";

const VideoBackground = ({ movieId }) => {
  
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useMoviesVideo(movieId);

  return (
    <div className="">
      <iframe
        className="h-[100vh] w-[100%] aspect-video"
        src={
          "https://www.youtube.com/embed/LH1J1EbqCaI?si=" + trailerVideo?.key+"?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
