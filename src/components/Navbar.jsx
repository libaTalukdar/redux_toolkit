import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Modal from './Modal';
import LogIn from './LogIn';
import Register from './Register';
import { setSearchTerm } from '../redux/ProductSlice';

const Navbar = () => {
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [isLogin,setIsLogin] = useState(true)
    const [search,setSearch] = useState()
    const dispatch= useDispatch()
    const navigate = useNavigate()

    const handleSearch = (e)=>{
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
    }

    const openSignUp = () => {
        setIsLogin(false)
        setIsModalOpen(true)
    }
    const openLogin = () => {
        setIsLogin(true)
        setIsModalOpen(true)
    }


    const products = useSelector(state =>state.cart.products)
  return (
   
   <nav className='bg-white shadow-md'>
    <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className='text-lg font-bold'>
            <Link to="/">New Shop</Link>

        </div>

        <div className='relative flex-1 mx-4'>
            <form  onSubmit={handleSearch}>
                <input 
                type="text"placeholder='search here' className='w-full border border-gray-400 rounded-lg py-2 px-4'
                onChange={(e)=>setSearch(e.target.value)}/>
                <FaSearch className='absolute top-3 right-3 text-red-700'></FaSearch>
            </form>
        </div>
        <div className='flex items-center space-x-4'>
            <Link to="/cart"className='relative' >
            <FaShoppingCart className='text-lg'/>
            {products.length > 0 &&(
                <span className='absolute bottom-2   text-sm w-4 h-4 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
                    {products.length}
                </span>
            )}
            </Link>
            <button className='hidden md:block'
            onClick={()=>setIsModalOpen(true)}>
                Login | Register
            </button>
            <button className='block md:hidden'
             onClick={()=>setIsModalOpen(true)}
            >
                <FaUser className='text-lg'/>
            </button>
        </div>
    </div>
    <div className='flex items-center justify-center space-x-10 py-4 font-bold'>
        <Link to="/" className='hover:underline underline-offset-4 '>Home</Link>
        <Link to="/shop" className='hover:underline underline-offset-4'>Shop </Link>
        
        <Link  to="/contact" className='hover:underline underline-offset-4'>Contact</Link>
        <Link to="/about" className='hover:underline underline-offset-4'>About</Link>
    </div>
    <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? <LogIn openSignUp={openSignUp}/> : <Register openLogin={openLogin}/>}
    </Modal>
   </nav>
  )
}

export default Navbar
