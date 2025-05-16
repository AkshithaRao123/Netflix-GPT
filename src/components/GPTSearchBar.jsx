import {BACKGROUND_IMAGE} from "../utils/constants"

const GPTSearchBar = () => {
  return (
    <div className="w-screen flex justify-center">
      <form className="mt-50 w-[50%] flex justify-center items-center">
        <input className="m-4 p-4 w-[50%] border-white border-2 rounded-2xl" type="text" placeholder="Search for movies..." />
        <button className="w-30 p-2" type="submit">Search</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
