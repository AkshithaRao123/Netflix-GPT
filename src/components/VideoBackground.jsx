import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = (props) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useMovieTrailer(props);

  return (
    <div className="relative top-0 -z-1">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?controls=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackground