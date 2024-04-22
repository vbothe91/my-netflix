const MovieTitle = ({title, overview}) => {

    return (
        <div className="w-full aspect-video pt-[16%] pl-16 absolute bg-gradient-to-r from-black text-white">
            <div className="text-3xl w-1/3 font-bold">{title}</div>
            <p className="py-6 w-1/4 ">{overview}</p>
            <div className="w-1/4">
                <button className="bg-white text-black rounded-lg p-2 px-6">Play</button>
                <button className="mx-2 bg-gray-500 text-white p-2 px-6 rounded-lg font-light">More Info</button>
            </div>
        </div>
    )
}

export default MovieTitle;
