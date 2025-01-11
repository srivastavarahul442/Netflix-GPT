import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constent";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  const getTopRatedMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addTopRatedMovies(jsonData.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
