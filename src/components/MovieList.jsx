import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                {/* <p>{movies[0].poster_path}</p>
                {movies.map((movie) => {
                    <MovieCard posterPath={movie.poster_path} />
                })} */}
                {
                    (movies
                        ?
                        movies.map((movie) => {
                            <MovieCard posterPath={movie.poster_path} />
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
