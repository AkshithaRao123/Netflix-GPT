import { BACKGROUND_IMAGE } from "../utils/constants"
import GPTMovieSuggestions from "./GPTMovieSuggestions"
import GPTSearchBar from "./GPTSearchBar"


const GPTSeach = () => {
  return (
    <div>
      <div className='fixed top=0 left=0 w-full h-full -z-15'>
        <img className='contrast-50' src={BACKGROUND_IMAGE} alt="background" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSeach
