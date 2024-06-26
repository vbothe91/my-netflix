import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector(state => state?.movies);

    return (
        <div className="bg-black"> 
            <div className=" -mt-56 relative z-20">
                {movies.nowPlayingMovies && <MovieList movies={movies.nowPlayingMovies} title="Now Playing" />}
                {movies.topRatedMovies && <MovieList movies={movies.topRatedMovies} title="Top Rated Movies" />}
                {movies.popularMovies && <MovieList movies={movies.popularMovies} title="Popular Movies" />}
                {movies.upcomingMovies && <MovieList movies={movies.upcomingMovies} title="Upcoming Movies" />}
            </div>
        </div>
    )
}

export default SecondaryContainer;
