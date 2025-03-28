import React from 'react'

const AddTask = ({setAddTaskDiv}) => {
  return (
    <div className='bg-white rounded px-4 py-4 w-[40%]'>
      <h1 className="text-center font-semibold text-xl">Add Task</h1>
      <hr className="mb-4 mt2" />
      <form action="" className='flex flex-col gap-4'>
        <input type="text" className="border px-2 py-1 rounded border-zinc-300 outline-none" placeholder='Title' name='titlle' />
        <div className="flex items-center justify-between gap-4">
          <div className="w-full">
            <h3 className='mb-2'>Select Priority</h3>
            <select name="preority" id="" className='border px-2 py-1 rounded border-zinc-300 outline-none w-full'>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="w-full">
            <h3 className='mb-2'>Select Status</h3>
            <select name="preority" id="" className='border px-2 py-1 rounded border-zinc-300 outline-none w-full'>
              <option value="Todo">Todo</option>
              <option value="inProgress">In Progress</option>
              <option value="complated">Complated</option>
            </select>
          </div>
        </div>
        <textarea name="descriptiom" placeholder='Description' id="" className="border px-2 py-1 rounded border-zinc-300 outline-none h-[25vh]"></textarea>
        <div className="flex items-center justify-between gap-4">
          <button className='w-full bg-blue-800 py-2 hover:bg-blue-700 transition-all duration-300 text-white rounded'>Add Tasks</button>
          <button className='w-full border border-black py-2 hover:bg-zinc-100 transition-all duration-300 rounded' onClick={()=>setAddTaskDiv("hidden")}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddTask