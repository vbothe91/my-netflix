import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../constants/common";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addPopularMovies(movies.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, [])
};

export default usePopularMovies;
