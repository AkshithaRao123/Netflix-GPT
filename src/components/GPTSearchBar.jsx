import { API_OPTIONS } from "../utils/constants"
import { lang } from "../utils/languageConstants"
import { useSelector, useDispatch } from "react-redux"
import cohere from "../utils/cohere"
import { useRef } from "react"
import { addGPTMoviesResults } from "../utils/gptSlice"

const GPTSearchBar = () => {
  const langSelector = useSelector(store => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    console.log(movie, "movie");
    const url = 'https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&page=1'
    console.log(url, "url");
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    return json;
  }

  const handleGPTSearch = async () => {

    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + searchText.current.value + "Only give names of 5 movies, comma separated, like the example result given ahead. Example result: Golmaal, Koi Mil Gaya. Do not give any explanation";

    const chat = await cohere.chat({
      model: "command",
      message: gptQuery,
    });

    if (!chat.text) {
      console.log("No results found");
    }
    else {
      console.log(chat.text);
      const gptMovies = chat.text.split(", ");

      const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie)); // since Fetching from the API is an async fn
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults, "results");

      dispatch(addGPTMoviesResults({movieNames: gptMovies, movieResults: tmdbResults}));
    }
  }

  return (
    <div className="w-screen flex justify-center">
      <form className="mt-50 w-full md:w-[50%] flex justify-center items-center" onSubmit={(e) => { e.preventDefault(); }}>
        <input ref={searchText} className="m-4 p-4 w-[50%] border-white border-2 rounded-2xl" type="text" placeholder={lang[langSelector].searchPlaceholder} />
        <button className="w-30 p-2" type="submit"
          onClick={handleGPTSearch}>{lang[langSelector].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
