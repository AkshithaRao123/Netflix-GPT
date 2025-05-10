import {useState, useRef} from 'react'
import React from 'react'
import Header from './Header'
import { BACKGROUND_IMAGE } from '../utils/constants'
import {validate} from '../utils/validate'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = React.useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  // const confirmed_password = useRef(null);

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    const message = validate(email.current.value, password.current.value);
    // console.log(confirmed_password.current.value);

    setErrorMessage(message);
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className='z-1'>
      <Header />
      <div className='center-screen'>
        <img className='contrast-50' src={BACKGROUND_IMAGE} alt="background" />
        <form
        onSubmit={(e) => e.preventDefault()} className='fixed bg-black z-10 login-form text-white mb-28'>
          <label className='font-bold text-2xl pb-5'>{isSignInForm ? "Sign In" : "Sign Up"}</label>
          {!isSignInForm && <input type="text" placeholder="Full Name" className='p-2 m-2 outline-1 outline-white rounded-md bg-gray-800' />}
          <input
          ref={email} type="text" placeholder="Email ID" className='p-2 m-2 outline-1 outline-white rounded-md bg-gray-800' />
          <input
          ref={password} type="password" placeholder="Password" className='p-2 m-2 outline-1 outline-white rounded-md bg-gray-800' />
          {/* {!isSignInForm && <input
          ref={confirmed_password} type="password" placeholder="Confirm Password" className='p-2 m-2 outline-1 outline-white rounded-md bg-gray-800' />} */}
          <button type="submit" className='p-4 m-2' onClick={handleButtonClick}>{isSignInForm ? "Sign In": "Sign Up"}</button>
          <p className='text-red-500'>{errorMessage}</p>
          <p className='text-sm py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now!" : "Already a user? Login."}</p>
        </form>
      </div>
    </div>
  )
}

export default Login
