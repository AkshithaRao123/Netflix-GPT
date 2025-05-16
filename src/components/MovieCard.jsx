import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    console.log(posterPath, "posterpath");
    return (
        <div>
            <p>{posterPath}</p>
            <img src={IMG_CDN_URL + posterPath} alt="Movie Poster" />
        </div>
    )
}

export default MovieCard
