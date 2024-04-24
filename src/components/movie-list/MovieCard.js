import { TMDB_IMG_PATH } from "../../constants/common";

const MovieCard = ({movie}) => {
    const {backdrop_path, original_title} = movie;

    return (
        <div className="w-52 pr-2">
            <img src={`${TMDB_IMG_PATH}${backdrop_path}`} alt={original_title} />
        </div>
    )
}

export default MovieCard;
