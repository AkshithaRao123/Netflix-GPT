import { BACKGROUND_IMAGE } from "../utils/constants"
import { lang } from "../utils/languageConstants"
import { useSelector } from "react-redux"

const GPTSearchBar = () => {
  const langSelector = useSelector(store => store.config.lang);

  return (
    <div className="w-screen flex justify-center">
      <form className="mt-50 w-[50%] flex justify-center items-center">
        <input className="m-4 p-4 w-[50%] border-white border-2 rounded-2xl" type="text" placeholder={lang[langSelector].searchPlaceholder} />
        <button className="w-30 p-2" type="submit">{lang[langSelector].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
