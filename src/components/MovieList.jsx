import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                {/* {movies.map((movie) => {
                    <MovieCard posterPath={movie.poster_path} />
                })} */}
                {
                    (movies
                        ?
                        movies.map((movie) => {
                            return <MovieCard posterPath={movie?.poster_path} />
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
