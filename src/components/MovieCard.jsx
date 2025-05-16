import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {

    return (
        <div className="w-50 px-2.5">
            <img src={IMG_CDN_URL + posterPath} alt="Movie Poster" />
        </div>
    )
}

export default MovieCard
