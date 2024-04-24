import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../constants/common";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getNowUpcomingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addUpcomingMovies(movies.results));
    };

    useEffect(() => {
        getNowUpcomingMovies();
    }, [])
};

export default useUpcomingMovies;
