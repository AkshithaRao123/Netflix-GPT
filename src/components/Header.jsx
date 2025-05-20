import { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { NETFLIX_LOGO_URL, SUPPORTEDD_LANGUAGES } from '../utils/constants'
import PROFILE_ICON from '../assets/user_profile.svg'
import { auth } from "../utils/firebase"
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log('Error signing out:', error);
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        )
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });



    return () => {
      unsubscribe();  // unsubscribe when component unmounts
    }
  }, [])

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  }

  const handleLanguageChange = (lang) => {
    dispatch(changeLanguage(lang.target.value));
  }

  return (
    <div className='fixed flex flex-row items-center justify-between top-0 z-10 bg-gradient-to-b from-black w-screen px-10'>
      <div>
        <img className='h-28 w-fit' src={NETFLIX_LOGO_URL} alt="logo" />
      </div>
      {user &&
        <div className='flex flex-row justify-end w-full'>
          {showGPTSearch && <select className='mx-10'
            onChange={handleLanguageChange}>
            {SUPPORTEDD_LANGUAGES.map((lang) => (<option
              key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>))}
          </select>}
          <button onClick={handleGPTSearchClick}>
            {showGPTSearch ? "Home Page" : "GPT Search"}
          </button>
          <img alt='user icon' src={PROFILE_ICON} className='w-30 px-10 profile-icon' />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header
