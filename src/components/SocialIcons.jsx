import React from 'react'
import { RiDribbbleFill, RiGithubFill, RiInstagramFill, RiInstallFill, RiLinkedinFill, RiTwitterFill, RiYoutubeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const SocialIcons = () => {
  return (
    <div className='flex gap-6 pr-4'>
        <Link to={''} className='text-[#08d9d6] text-2xl hover:-translate-y-1 transition-all duration-500'><RiYoutubeFill /></Link>
        <Link to={'https://www.instagram.com/subhan.ch13/'} className='text-[#f08a5d] text-2xl hover:-translate-y-1 transition-all duration-500'><RiInstagramFill /></Link>
        <Link to={'https://www.instagram.com/subhan.ch13/'} className='text-[#ff2e63] text-2xl hover:-translate-y-1 transition-all duration-500'><RiTwitterFill /></Link>
        <Link to={'https://www.linkedin.com/in/subhan-nadeem-67ab64239/'} className='text-[#eaeaea] text-2xl hover:-translate-y-1 transition-all duration-500'><RiLinkedinFill /></Link>
        <Link to={'https://github.com/subhannadeem1'} className='text-[#f9ed69] text-2xl hover:-translate-y-1 transition-all duration-500'><RiDribbbleFill /></Link>
        <Link to={'https://github.com/subhannadeem1'} className='text-[#5272f2] text-2xl hover:-translate-y-1 transition-all duration-500'><RiGithubFill /></Link>
    </div>
  )
}

export default SocialIcons