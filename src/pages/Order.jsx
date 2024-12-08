import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Order from './Order';

const Order = ({order}) => {
  const navigate = useNavigate()
  return (
    <div className='container mx-auto bg-gray-200 rounded shadow-lg my-4 py-14 max-w-7xl px-8 py-11'>
      <h2 className='text-4xl font-semibold'>thanks for your order</h2>
      <p>your order has been placed successfullu you will receive an email</p>
      <div>
        <h3>order summary</h3>
        <p>order number:{order.orderNumber}</p>
        <div>
          <h2>shipping information</h2>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zip}</p>
        </div>
        <div>
          <h3>Products Ordered</h3>
          {order.products.map(product=>(
            <div key={product.id}>
              <p>{product.name} x {product.quantity}</p>
              <p>{product.price * product.quantity}</p>
            </div>
          ))}
        </div>
        <div className='flex items-center gap-4'>
        <button className='bg-red-300 px-4 py-2 rounded text-black'>track order</button>
        <button className='bg-green-300 px-4 py-2 rounded text-black'
         onClick={()=>navigate('/')}>continue shopping</button>
        </div>
      </div>
    </div>
  )
}

export default Order
