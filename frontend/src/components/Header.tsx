import React from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className='container mx-auto flex justify-between items-center'>
        <Link to="/" className="text-3xl font-bold tracking-tight text-orange-500">MernEats.com</Link>
        <div className="hidden md:block"><MobileNav /></div>
      </div>
    </div>
  )
}

export default Header 