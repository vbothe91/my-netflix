import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/store/movieSlice";
import { API_OPTIONS } from "../constants/common";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const upcomingMovies = useSelector(state => state.movies.upcomingMovies);

    const getNowUpcomingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addUpcomingMovies(movies.results));
    };

    useEffect(() => {
        !upcomingMovies && getNowUpcomingMovies();
    }, [])
};

export default useUpcomingMovies;
