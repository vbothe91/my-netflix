import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/movieSlice";
import { API_OPTIONS } from "../constants/common";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(state => state.movies.nowPlayingMovies);

    const getNowPlayingMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const movies = await data.json();
        dispatch(addNowPlayingMovies(movies.results));
    };

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, [])
};

export default useNowPlayingMovies;
