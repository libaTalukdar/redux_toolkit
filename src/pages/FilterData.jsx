import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Not from '../assets/not.jpg'

const FilterData = () => {
    const filterProducts = useSelector(state=>state.product.filteredData)
  return (
    <div className=' mx-auto py-12 px-4 md:px-16 lg:px-24'>
    <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
    {filterProducts.length>0 ? 
    <div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>
      {filterProducts.map((product)=>(
        
        <ProductCard  product={product}/>
      ))}
    </div>
    </div>
    :
    <div className='flex justify-center'>
  <img src={Not} alt="" />
    </div>
    }
    
  </div>
  )
  
}

export default FilterData
