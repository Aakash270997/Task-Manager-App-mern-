import React from 'react';
import { IoLogOutOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className='flex px-12 py-4 items-center border-b justify-between'>
      <div>
        <h1 className="text-2xl text-blue-800 font-semibold">Manage your Tasks</h1>
      </div>
      <div className="flex gap-8">
        <button className="button hover:text-blue-800 transition-all duration-300">Add Task</button>
        <button className="text-2xl hover:text-red-800 transition-all duration-300"><IoLogOutOutline /></button>
      </div>
    </div>
  )
}

export default Header