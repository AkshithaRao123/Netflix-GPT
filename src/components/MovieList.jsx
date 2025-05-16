import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    return (
        <div className="p-10">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="flex flex-row overflow-x-scroll py-5">
                {
                    (movies
                        ?
                        movies.map((movie) => {
                            return <div key={movie.id}><MovieCard posterPath={movie?.poster_path} /></div>
                        })
                        :
                        <p>No movies available</p>
                    )
                }
            </div>
        </div>
    )
}

export default MovieList
