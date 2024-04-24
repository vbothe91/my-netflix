import { useSelector } from "react-redux";
import MovieBackground from "./MovieBackground";
import MovieTitle from "./MovieTitle";

const MainContainer = () => {
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

    if (!nowPlayingMovies) return;

    const mainMovie = nowPlayingMovies[0];
    const {title, overview, id} = mainMovie;

    return (
        <div>
            <MovieTitle title={title} overview={overview} />
            <MovieBackground movieId={id} />
        </div>
        
    )
}

export default MainContainer;
