import React from 'react'
import { BACKGROUND_IMAGE } from '../utils/constants'
import { NETFLIX_LOGO_URL } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute top-0 z-10'>

      <img
        className='w-44' src={NETFLIX_LOGO_URL} alt="logo" />
    </div>
    
  )
}

export default Header
