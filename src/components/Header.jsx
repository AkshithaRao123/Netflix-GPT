import React from 'react'
import { BACKGROUND_IMAGE } from '../utils/constants'
import { NETFLIX_LOGO_URL } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute top-0 z-10 px-8 bg-gradient-to-b from-black w-full'>
      <img
        className='w-40' src={NETFLIX_LOGO_URL} alt="logo" />
    </div>
    
  )
}

export default Header
