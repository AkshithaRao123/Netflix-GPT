import React from 'react'
import Header from './Header'
import { BACKGROUND_IMAGE } from '../utils/constants'

const Login = () => {
  return (
    <div className='absolute top-0 z-1'>
      <Header />
      <div className='center-screen'>
      <img className='contrast-50' src={BACKGROUND_IMAGE} alt="background" />
      <form className='fixed bg-black z-10 login-form text-white'>
        <label className='font-bold text-2xl pb-5'>Sign in</label>
        <input type="text" placeholder="Username" className='p-2 m-2 outline-1 outline-white rounded-md bg-gray-800' />
        <input type="text" placeholder="Password" className='p-2 m-2 outline-1 outline-white rounded-md bg-gray-800' />
        <button type="submit" className='p-4 m-4'>Login</button>
      </form>
      </div>
    </div>
  )
}

export default Login
