import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <p>{movies[0].poster_path}</p>
                {movies.map((movie) => {
                    <MovieCard posterPath={movie.poster_path} />
                })}
            </div>
        </div>
    )
}

export default MovieList
