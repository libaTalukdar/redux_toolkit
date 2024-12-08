import React, { useEffect } from 'react'
import { Categories, mockData } from '../MockData'
import Banner from '../assets/banner.jpg'
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import {useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/ProductSlice'
import ProductCard from '../components/ProductCard'
import Shop from './Shop'

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state=>state.product)

  useEffect(()=>{
    dispatch(setProducts(mockData))
  },[])
  return (
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row gap-2'>
        <div className='w-full md:w-3/12 '>
            <div className='bg-yellow-300 text-lg font-bold px-2 py-2 text-center'>Shop of goods</div>
            <ul className='space-y-4 p-3 bg-gray-200  border'>
            {Categories.map((category,index)=>(
                <li key={index} className='flex items-center text-sm'>
                    <div className='w-2 h-2 border border-gray-800 rounded-full mr-2'></div>
                    {category}
                </li>
            ))}
        </ul>
        </div>
        
        <div className='w-full md:w-9/12 mt-8 md:mt-0  h-96'>
          <img src={Banner} alt="" className='h-full w-full'/>
        </div>
      </div>
      <InfoSection/>
      <CategorySection/>
      <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Top Procucts</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {products.products.slice(0,5).map((product)=>(
            
            <ProductCard  product={product}/>
          ))}
        </div>
      </div>
      <Shop/>
    </div>
  )
}

export default Home
