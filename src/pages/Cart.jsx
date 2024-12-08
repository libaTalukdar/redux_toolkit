import React, { useState } from 'react'
import Not from '../assets/not.jpg'
import { useDispatch, useSelector } from 'react-redux'
import {  FaTrashAlt } from 'react-icons/fa'
import Modal from '../components/Modal'
import ChangeAddress from '../components/ChangeAddress'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const cart = useSelector(state=>state.cart);
    const [address,setAddress] = useState('sylhet,main road')
    const [isModalOpen,setIsModalOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <>
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 '>
      {cart.products.length > 0 ?
      <div className=''>
      <h3 className='text-2xl font-semibold mb-4'>Shopping Cart</h3>
      <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8 '>
        <div className='md:w-2/3'>
            <div className='flex justify-between border-b items-center mb-4 text-sm font-bold'>
                <p>Products</p>
                <div className='flex space-x-8'>
                    <p>PRICE</p>
                    <p>Quantity</p>
                    <p>SUBTOTAL</p>
                    <p>REMOVE</p>
                </div>
            </div>
            <div>
                {cart.products.map((product)=>(
                    <div key={product.id} className='flex items-center justify-between p-3 border-b'>
                        <div className='flex flex-col items-center space-x-4'>
                            <img src={product.image} alt="" className='w-16 h-16 object-contain rounded' />
                            
                            <div>
                                <h3 className='text-lg font-semibold'>{product.name}</h3>
                            </div>
                        </div>
                    
                    <div className='flex space-x-12 items-center'>
                        <p>${product.price}</p>
                        <div className="flex items-center justify-center border">
                            <button className='text-xl font-bold px-2 border-r'
                            onClick={()=>dispatch(decreaseQuantity(product.id))}>-</button>
                            <p className='text-xl px-2'>{product.quantity}</p>
                            <button className='text-xl px-1 border-l'
                            onClick={()=>dispatch(increaseQuantity(product.id))}>+</button>
                        </div>
                        <p>${(product.quantity * product.price).toFixed(2)}</p>
                        <button onClick={()=>dispatch(removeFromCart(product.id))}><FaTrashAlt/></button>
                    </div>
                    </div>
                ))}
            </div>

            </div>
            <div className=' md:w-1/3 bg-white p-6 rounded-lg shadow-md border '>
                <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
                <div className='flex justify-between mb-5 border-b pb-1'>
                    <span className='text-sm'>Total Items:</span>
                    <span>{cart.totalQuantity}</span>
                </div>
                <div className='mb-4 border-b pb-2'>
                    <p>shipping:</p>
                    <p className='ml-2'>Shipping to{""}</p>
                    <span className='text-xs font-bold'>{address}</span>
                    <button className='text-blue bg-yellow-600 px-2 py-2 rounded-lg 
                    hover:underline hover:underline-offset-4 mt-1 ml-2'
                    onClick={()=>setIsModalOpen(true)}>change address</button>
                </div>
                <div className='flex justify-between mb-4'>
                    <span>Total price:</span>
                    <span>{cart.totalPrice}</span>
                </div>
                <button className='w-full bg-red-600 text-white py-2 hover:bg-red-300'
                onClick={()=>navigate('/checkout')}>
                    Proceed to checkout
                </button>
            </div>
        
      </div>
      <Modal isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}>
      <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen}/>
      </Modal>
      </div>
      : <div className='flex justify-center'>
        <img src={Not} alt=""  className='h-96'/>
      </div>
      }
    </div>
    </>
  )
}

export default Cart
