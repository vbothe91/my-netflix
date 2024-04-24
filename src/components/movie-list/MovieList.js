import MovieCard from "./MovieCard";

const MovieList = ({movies, title}) => {
    return (
        <div className="px-12">
            <h2 className="text-2xl pb-4 pt-6 text-white">{title}</h2>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {
                        movies?.map(movie => {
                            return <MovieCard key={movie.id} movie={movie} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;
