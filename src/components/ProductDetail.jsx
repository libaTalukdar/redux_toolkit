import React, { useEffect, useState } from 'react'
import { FaCarSide, FaQuestion } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';


const ProductDetail = () => {
    const {id} = useParams();
    const products = useSelector(state=>state.product.products)
    const [product,setProduct] = useState()
    useEffect (()=>{
        const newProduct = products.find(product=>product.id === parseInt(id));
        setProduct(newProduct)
    },[id,products]);
    const dispatch = useDispatch()
  const handleAddToCart = (e,product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product))
    alert("product added successfully")
  }
   

    if(!product) return <div>Loading...</div>;
  return (
    <div className='container mx-auto py-8 px-4 md:px-16 lg:px-24'>
      <div className='flex flex-col md:flex-row gap-x-16'>
        {/* product image */}
        <div className='md:w-1/2 py-4 shadow-md h-96 flex justify-center'>
        <img src={product.image} alt="" className='h-full' />

        </div>
        {/* product information */}
<div className='md:w-1/2 p-4 shadow-md flex flex-col items-center gap-y-2 md:p-16'>
<h2 className='text-3xl font-semibold mb-2'>
  {product.name}

</h2>
<p className='text-xl font-semibold text-gray-700 mb-4'>
  ${product.price}

</p>
<div className='flex items-center mb-4 gap-x-2'>
  <input type="number" 
  id='quantity'
  min={1}
  className='border border-gray-950 p-1 w-16'/>
  <button className='px-4 bg-green-400 py-2'
  onClick={(e)=>handleAddToCart(e,product)}>
 
    Add to cart
  </button>

</div>
<div className='flex flex-col gap-y-4 mt-4'>
  <p className='flex items-center'>
  Delivery and return
    <FaCarSide className='ml-1'/>
   
  </p>
  <p className='flex items-center'>
    Ask question
<FaQuestion className='mr-1'/>
  </p>

</div>
  
</div>

      </div>
      <div className='mt-8'>
        <h3 className='text-xl font-bold mb-2'>Product Description</h3>
        <p>Product description will goes here.</p>
      </div>
    </div>
  )
}

export default ProductDetail
