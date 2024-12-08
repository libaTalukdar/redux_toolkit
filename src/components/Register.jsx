import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
    <h2 className='text-2xl font-bold mb-4'>Register</h2>
    <form 
     >
<div className='mb-4'>
  <label htmlFor="" className='block text-gray-700'>Name</label>
  <input type="Name" className='w-full px-3 py-2 border bg-slate-200'
  placeholder='enter Name' />
</div>
<div>
  <label htmlFor="" className='block text-gray-700'>Password</label>
  <input type="password"className='w-full px-3 py-2 border bg-slate-200' />
</div>

<div className='my-5'>
  <button type='submit' className='py-2 text-white w-full bg-red-600'>sign up</button>
</div>
     </form>
     <div className='text-center'>
      <span className='text-gray-700'>Already have an account?</span>
      <button className='text-red-800' onClick={openLogin}>Login</button>
     </div>

  </div>
  )
}

export default Register
