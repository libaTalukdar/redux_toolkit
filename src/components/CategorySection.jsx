import React from 'react'
import WomenPic from '../assets/women-wear.jpg'
import MenPic from '../assets/test7.jpg'
import KidPic from '../assets/test4.jpg'


const CategorySection = () => {
    const categories = [
        {
            title:'Men',
            imageUrl:MenPic,

        },
        {
            title:'women',
            imageUrl:WomenPic,

        },
        {
            title:'kid',
            imageUrl:KidPic,

        },
    ];
  return (
    <div className='container mx-auto grid  grid-cols-1 sm:grid-cols-3 gap-6'>
      {categories.map((category,index)=>(
        <div key={index} className='relative h-64 transform shadow-md transition-transform duration-300 hover:scale-105'>
            <img src={category.imageUrl} alt="" className='w-full h-full rounded-lg shadow-md'/>
            <div className='absolute top-20 left-12'>
                <p>
                    {category.title}
                </p>
                <p>view all</p>
            </div>

        </div>
      ))}
    </div>
  )
}

export default CategorySection
