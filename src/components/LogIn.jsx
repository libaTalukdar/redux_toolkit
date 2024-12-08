import React from 'react'

const LogIn = ({openSignUp}) => {
  return (
    <div >
      <h2 className='text-2xl font-bold mb-4'>LogIn</h2>
      <form 
       >
<div className='mb-4'>
    <label htmlFor="" className='block text-gray-700'>Email</label>
    <input type="email" className='w-full px-3 py-2 border bg-slate-200'
    placeholder='enter email' />
</div>
<div>
    <label htmlFor="" className='block text-gray-700'>Password</label>
    <input type="password"className='w-full px-3 py-2 border bg-slate-200' />
</div>
<div className='mb-4  flex items-center justify-between mt-2'>
   <div>
   <label htmlFor="" className='inline-flex items-center'>
    <input type="checkbox" className='form-checkbox'/>
    <span className='ml-2'>Remember me</span>
    </label>
   </div>
    <div><a href="" className='text-red-800'>forgot password</a></div>
 
</div>
<div>
    <button className='py-2 text-white w-full bg-red-600'>Login</button>
</div>
       </form>
       <div className='text-center'>
        <span className='text-gray-700'>Dont have an account?</span>
        <button className='text-red-800' onClick={openSignUp}>sign up</button>
       </div>

    </div>
  )
}

export default LogIn
