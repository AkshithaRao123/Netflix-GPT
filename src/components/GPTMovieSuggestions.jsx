import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {

  const { movieResults, movieNames } = useSelector(store => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="blurr mt-30">
      {movieNames.map((movie, index) => (<div key={movie}>
        <MovieList key={movie} title={movie} movies={movieResults[index].results} />
        {/* {console.log(movie, movieResults[index])} */}
      </div>))}
    </div>
  )
}

export default GPTMovieSuggestions
