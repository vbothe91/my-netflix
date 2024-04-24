import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../constants/common";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRatedMovies = useSelector(state => state.movies.topRatedMovies);

    const getTopRatedMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addTopRatedMovies(movies.results));
    };

    useEffect(() => {
        !topRatedMovies&& getTopRatedMovies();
    }, [])
};

export default useTopRatedMovies;
