import React from 'react'
import Header from './Header'
import { BACKGROUND_IMAGE } from '../utils/constants'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = React.useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className='absolute top-0 z-1'>
      <Header />
      <div className='center-screen'>
        <img className='contrast-50' src={BACKGROUND_IMAGE} alt="background" />
        <form className='fixed bg-black z-10 login-form text-white'>
          <label className='font-bold text-2xl pb-5'>{isSignInForm ? "Sign In" : "Sign Up"}</label>
          {!isSignInForm && <input type="text" placeholder="Full Name" className='p-2 m-2 outline-1 outline-white rounded-md bg-gray-800' />}
          <input type="text" placeholder="Email ID" className='p-2 m-2 outline-1 outline-white rounded-md bg-gray-800' />
          <input type="text" placeholder="Password" className='p-2 m-2 outline-1 outline-white rounded-md bg-gray-800' />
          {!isSignInForm && <input type="text" placeholder="Confirm Password" className='p-2 m-2 outline-1 outline-white rounded-md bg-gray-800' />}
          <button type="submit" className='p-4 m-2'>{isSignInForm ? "Sign In": "Sign Up"}</button>
          <p className='text-sm py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now!" : "Already a user? Login."}</p>
        </form>
      </div>
    </div>
  )
}

export default Login
