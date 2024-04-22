import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBackgroundVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../constants/common";

const useBackgroundMovie = (movieId) => {
    const dispatch = useDispatch();
    const getBackgroundMovie = async() => {
        const data = await   fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();

        const filteredData = json.results?.filter((movie) => movie?.type === "Trailer");
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        dispatch(addBackgroundVideo(trailer));
    }

    useEffect(()=> {
        getBackgroundMovie();
    }, [])
}

export default useBackgroundMovie;
