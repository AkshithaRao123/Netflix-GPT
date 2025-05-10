import React from 'react'
import { NETFLIX_LOGO_URL } from '../utils/constants'

const Header = () => {
  return (
    <div className='fixed top-0 z-10 px-8 bg-gradient-to-b from-black w-full'>
      <img
        className='h-28 w-fit' src={NETFLIX_LOGO_URL} alt="logo" />
    </div>
    
  )
}

export default Header
