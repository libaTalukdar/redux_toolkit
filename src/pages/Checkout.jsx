import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Checkout = ({setOrder}) => {
  const [billingToggle,setBillingToggle] = useState(true)
  const [shippingToggle,setShippingToggle] = useState(false)
  const [paymentToggle,setPaymentToggle] = useState(false)
  const [paymentMethod,setPaymentMethod] = useState("cod")
  const [shippingInfo,setShippingInfo] =useState({
    address:"",
    city:"",
    zip:""
  })
  const cart = useSelector(state=>state.cart);
  const navigate = useNavigate()
  const handleOrder = () => {
    const newOrder = {
      products:cart.products,
      orderNumber:"13244",
      shippingInformation:shippingInfo,
      totalPrice:cart.totalPrice
    }
    setOrder(newOrder)
    navigate('/order-confirmation')
  }
  return (
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24 '>
         <h3 className='text-2xl font-semibold mb-4'>Shopping Cart</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
         {/* left */}
         <div className='border p-12 mb-6 bg-gray-200 '>
         <div className='flex items-center justify-between border px-4 py-2 bg-slate-50'
         onClick={()=>setBillingToggle(!billingToggle)}>
            <h3 className='text-lg font-semibold mb-4' >Billing Information</h3>
            {billingToggle ? <FaAngleDown/> :<FaAngleUp/>}
         </div>
        <div className={`space-y-4 ${billingToggle ? "": "hidden"}`}>
        <div>
                <label className='block text-gray-700'>Name</label>
                <input type="text"
                placeholder='your name'
                className='w-full px-3 py-2 border' />
            </div>
         
         
            <div>
                <label className='block text-gray-700'>Email</label>
                <input type="email"
                placeholder='your email'
                className='w-full px-3 py-2 border' />
            </div>
         
        
            <div>
                <label className='block text-gray-700'>Phone</label>
                <input type="text" 
                placeholder='your number'
                className='w-full px-3 py-2 border'/>
            </div>
        
         
         </div>
         {/* shipping information */}
         <div className='flex items-center justify-between border px-4 py-2 bg-slate-50 mt-4'
         onClick={()=>setShippingToggle(!shippingToggle)}>
            <h3 className='text-lg font-semibold mb-4' >shipping Information</h3>
            {billingToggle ? <FaAngleDown/> :<FaAngleUp/>}
         </div>
        <div className={`space-y-4 ${shippingToggle ? "": "hidden"}`}>
        <div>
                <label className='block text-gray-700'>Address</label>
                <input type="text"
                placeholder='your name'
                className='w-full px-3 py-2 border'
                onChange={(e)=>setShippingInfo({...shippingInfo,address:e.target.value})} />
            </div>
         
         
            <div>
                <label className='block text-gray-700'>City</label>
                <input type="text"
                name='city'
                className='w-full px-3 py-2 border' 
                onChange={(e)=>setShippingInfo({...shippingInfo,city:e.target.value})}/>
            </div>
         
        
            <div>
                <label className='block text-gray-700'>Zipcode</label>
                <input type="text" 
                placeholder='your number'
                className='w-full px-3 py-2 border'
                onChange={(e)=>setShippingInfo({...shippingInfo,zip:e.target.value})}/>
            </div>
        
         
         </div>
         {/* end shipping */}
         {/* payment method */}
         <div>
         <div className='flex items-center justify-between border px-4 py-2 bg-slate-50 mt-4'
         onClick={()=>setPaymentToggle(!paymentToggle)}>
            <h3 className='text-lg font-semibold mb-4' >Payment Method</h3>
            {paymentToggle ? <FaAngleDown/> :<FaAngleUp/>}
         </div>
        <div className={`space-y-4 ${paymentToggle ? "": "hidden"}`}>
        <div className='flex items-center my-2'>
                
                <input type="radio"
                name='payment'
                checked={paymentMethod === "cod"}
                onChange={()=>setPaymentMethod("cod")}/>
                <label className='block text-gray-700 ml-2'>Cash on delivery</label>   
            </div>
            <div className='flex items-center mb-2'>
                
                <input type="radio"
                name='payment'
                checked={paymentMethod === "dc"}
                onChange={()=>setPaymentMethod("dc")}/>
                <label className='block text-gray-700 ml-2'>debit card</label>   
            </div>
  
         </div>
         {paymentMethod ==="dc" && (
          <div className='bg-gray-300 p-4 rounded-lg mb-4'>
            <h3 className='text-xl font-semibold mb-4'>Debit card information</h3>
            <div className='mb-4'>
              <label htmlFor="" className='font-semibold mb-4 block text-gray-700 mb-2'>Card number</label>
              <input type="text" placeholder='Enter Card Number'className='border w-full p-2 rounded' />
            </div>
            <div className='mb-4'>
              <label htmlFor="">Card Holder Name</label>
              <input type="text" className='border w-full p-2 rounded' />
            </div>
            <div className='flex space-x-2'>
            <div className='mb-4'>
              <label htmlFor=""className='font-semibold mb-4 block text-gray-700 mb-2'>Expire Date</label>
              <input type="text" className='border w-full p-2 rounded'
              required/>
            </div>
            <div>
              <label htmlFor="" className='font-semibold mb-4 block text-gray-700 mb-2'>cvv</label>
              <input type="text" className='border w-full p-2 rounded'
               required/>
            </div>
            </div>
          </div>
         )}
         </div>
         {/* end payment */}
         </div>
         {/* right */}
         <div className='border px-12 py-8 bg-slate-300'>
          <h3 className='text-xl font-semibold mb-4'>Order Summary</h3>
          <div>
            {cart.products.map(product=>(
              <div key={product.id} className='flex justify-between'>
                <div className='flex items-center'>
                <div>
                  <img src={product.image} alt="" className='w-[130px] h-[150px] rounded' />
                </div>
                <div className='ml-4'>
                  <h4 className='text-md font-semibold'>{product.name}</h4>
                  <p>${product.price} x {product.quantity}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
          <div className='text-gray-800 mt-4 border-t pt-4 border-black'>
            <div className='flex justify-between'>
              <span>Total price:</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className='px-2 w-full mt-2 bg-green-400 py-2 rounded'
          onClick={handleOrder}> Place order</button>
         </div>
        {/*end right */}
        </div>
      
    </div>
    
  )
}

export default Checkout
