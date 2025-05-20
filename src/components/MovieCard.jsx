import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    if(!posterPath) {
        return null;
    }

    return (
        <div className="w-30 md:w-50 px-2.5">
            <img src={IMG_CDN_URL + posterPath} alt="Movie Poster" />
        </div>
    )
}

export default MovieCard
