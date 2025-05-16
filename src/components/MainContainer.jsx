import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies) return;

    const mainMovie = movies[0];
    const { original_title, overview } = mainMovie;
    const movieID = mainMovie.id.toString();

    return (
        <div className="font-bold">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieID={movieID} />
        </div>
    )
}

export default MainContainer