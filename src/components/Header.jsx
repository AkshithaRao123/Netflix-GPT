import { NETFLIX_LOGO_URL } from '../utils/constants'
import PROFILE_ICON from '../assets/user_profile.svg'
import { auth } from "../utils/firebase"
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      console.log('Error signing out:', error);
    });
  }
  return (
    <div className='fixed flex flex-row items-center justify-between top-0 z-10 bg-gradient-to-b from-black w-screen px-10'>
      <div>
        <img className='h-28 w-fit' src={NETFLIX_LOGO_URL} alt="logo" />
      </div>
      {user && <div className='flex flex-row justify-end w-full'>
        <img alt='user icon' src={PROFILE_ICON} className='w-30 px-10' />
        <button onClick={handleSignOut} className='w-40 px-10'>
          Sign Out
        </button>
      </div>}
    </div>
  )
}

export default Header
