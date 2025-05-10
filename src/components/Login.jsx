import React from 'react'
import Header from './Header'
import { BACKGROUND_IMAGE } from '../utils/constants'

const Login = () => {
  return (
    <div>
      <Header />
      <img className='contrast-50' src={BACKGROUND_IMAGE} alt="background" />
    </div>
  )
}

export default Login
