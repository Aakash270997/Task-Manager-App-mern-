import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  
  const navigate = useNavigate()
  const [loginUserInfo, setLoginUserInfo] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const {name, value} = e.target;
    setLoginUserInfo({...loginUserInfo, [name]:value })
  };

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", loginUserInfo, {withCredentials: true} );
      alert(res.data.success)
      localStorage.setItem("userLoggedIn", "yes");
      navigate("/dashboard");
    } catch (error) {
      // alert(error.response.error);
      console.log(error.response.data.error)
    }
  }

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className="w-[60vw] md:w-[90vw] lg:w-[30vw]">
        <h1 className="text-3xl font-bold text-center mb-1 text-blue-800">Manage Your tasks</h1>
        <h3 className='text-center font-semibold text-xinc-900'>Login</h3>
      </div>
      <div className="w-[60vw] md:w-[90vw] lg:w-[30vw] mt-4">
        <form action="" className='flex flex-col gap-4'>
          {/* <input type="text" required placeholder='Username' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none' name='username' /> */}
          <input type="email" required placeholder='Email' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none' name='email' value={loginUserInfo.email} onChange={change} />
          <input type="password" required placeholder='Password' className='border rounded px-4 py-1 border-zinc-400 w-[100%] outline-none' name='password' minLength="5" value={loginUserInfo.password} onChange={change} />
          <button onClick={loginUser} className="bg-blue-700 text-white font-seminold py-2 rounded hover:bg-blue-600 transition-all duration-300">Register</button>
          <p className="text-center font-semibild text-gray-800">
            Don't have an account <Link to="/register" className='text-gray-950 underline'>Register</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login