import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className="w-[60vw] md:w-[90vw] lg:w-[30vw]">
        <h1 className="text-3xl font-bold text-center mb-1 text-blue-800">Manage Your tasks</h1>
        <h3 className='text-center font-semibold text-xinc-900'>Login</h3>
      </div>
      <div className="w-[60vw] md:w-[90vw] lg:w-[30vw] mt-4">
        <form action="" className='flex flex-col gap-4'>
          {/* <input type="text" required placeholder='Username' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none' name='username' /> */}
          <input type="email" required placeholder='Email' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none' name='email' />
          <input type="password" required placeholder='Password' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none' name='password' minLength="5" />
          <button className="bg-blue-700 text-white font-seminold py-2 rounded hover:bg-blue-600 transition-all duration-300">Register</button>
          <p className="text-center font-semibild text-gray-800">
            Don't have an account <Link to="/register" className='text-gray-950 underline'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login