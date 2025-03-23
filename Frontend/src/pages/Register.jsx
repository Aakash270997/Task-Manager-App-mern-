import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate()
  const [registerUserInfo, setRegisterUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    const {name, value} = e.target;
    setRegisterUserInfo({...registerUserInfo, [name]:value })
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:1000/api/v1/register", registerUserInfo);
      alert(res.data.success)
      navigate("/login")
    } catch (error) {
      alert(error.response.data.error);
    }
  }
  
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className="w-[60vw] md:w-[90vw] lg:w-[30vw]">
        <h1 className="text-3xl font-bold text-center mb-1 text-blue-800">Manage Your tasks</h1>
        <h3 className='text-center font-semibold text-xinc-900'>Register</h3>
      </div>
      <div className="w-[60vw] md:w-[90vw] lg:w-[30vw] mt-4">
        <form action="" className='flex flex-col gap-4'>
          <input type="text" required placeholder='Username' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none' name='username' value={registerUserInfo.username} onChange={change} />
          <input type="email" required placeholder='Email' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none' name='email' value={registerUserInfo.email} onChange={change} />
          <input type="password" required placeholder='Password' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none' name='password' minLength="5" value={registerUserInfo.password} onChange={change} />
          <button onClick={registerUser} className="bg-blue-700 text-white font-seminold py-2 rounded hover:bg-blue-600 transition-all duration-300">Register</button>
          <p className="text-center font-semibild text-gray-800">
            Already have an account <Link to="/login" className='text-gray-950 underline'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register