import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constent";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  const getUpcomingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const jsonData = await data.json();
    // console.log(jsonData.results);
    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
