import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (props) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector(store => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + props.movieID + '/videos', API_OPTIONS);
    const json = await data.json();

    const filterTrailer = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterTrailer.length ? filterTrailer[0] : filterTrailer[1];

    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    !movieTrailer && getMovieVideos();
  }, [])
}

export default useMovieTrailer;
