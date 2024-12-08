import React from 'react'
import { FaDribbble, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-700 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8' >
      <div>
        <h3 className='text-xl font-bold'>New Shop</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nam.</p>
      </div>
      <div className='flex flex-col md:items-center'>
        <h4 className='text-lg font-semibold'>Quick Links</h4>
        <ul className='mt-4 space-y-2'>
          <li>
            <Link to='/'>Home</Link>          
          </li>
          <li>
            <Link to='/shop'>Shop</Link>          
          </li>
          <li>
            <Link to='/contact'>Contact</Link>          
          </li>
          <li>
            <Link to='/about'>About</Link>          
          </li>
        </ul>
      </div>
      <div className='mt-4 space-y-2'>
        <h4 className='text-lg font-semibold'>Follow Us</h4>
        <div className='flex space-x-4 mt-4'>
        <a href=""><FaFacebook/></a>
        <a href=""><FaTwitter/></a>
        <a href=""><FaLinkedin/></a>
        <a href=""><FaDribbble/></a>
        </div>
        <form className='flex items-center justify-center mt-8'
        >
          <input type="email"placeholder='Enter email' className='w-full p-2 rounded-l-lg outline-none bg-gray-500' />
          <button className='bg-yellow-950 px-4 py-2 rounded-r-lg'>Subscribe</button>
        </form>
      </div>
    </div>
    </footer>
  )
}

export default Footer
