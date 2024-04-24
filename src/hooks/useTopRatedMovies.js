import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../constants/common";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addTopRatedMovies(movies.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, [])
};

export default useTopRatedMovies;