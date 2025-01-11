import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constent";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const getPopularMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addPopularMovies(jsonData.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
