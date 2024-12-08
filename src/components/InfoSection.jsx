import React from 'react'
import { FaHeadset, FaShippingFast } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'

const InfoSection = () => {
    const infoItems = [
        {
            icon:<FaShippingFast className='text-3xl'/>,
            title:"Free Shipping",
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            icon:<FaHeadset className='text-3xl'/>,
            title:"loem Shipping",
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            icon:<FaMoneyBill1Wave className='text-3xl'/>,
            title:"kito Shipping",
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            icon:<FaShippingFast className='text-3xl'/>,
            title:"lorem ipsum",
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
            icon:<FaShippingFast className='text-3xl'/>,
            title:"Foem ipsum",
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
    ];
  return (
    <div className='bg-white pb-8 pt-12'>
     <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {infoItems.map((item,index)=>(
            <div key={index} className=' bg-gray-200 flex flex-col items-center
             text-center p-4 border rounded-lg 
             transform shadow-md transition-transform duration-300 hover:scale-105'>
            {item.icon}
            <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
            <p className='mt-2 '>{item.description}</p>
            </div>
        ))}
     </div>
    </div>
  )
}

export default InfoSection
