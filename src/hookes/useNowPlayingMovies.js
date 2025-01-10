import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constent";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

  const getNowPlayingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
