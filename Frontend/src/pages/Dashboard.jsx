import React, { useState } from 'react'
import Header from '../components/dashboard/Header'
import AddTask from '../components/dashboard/AddTask'

const Dashboard = () => {
  const [addTaskDiv, setAddTaskDiv] = useState("hidden")
  return (
    <div className='w-full relative'>
      <div className="bg-white">
        <Header setAddTaskDiv={setAddTaskDiv} />
      </div>

      {/* Model */}
      <div className={`w-full ${addTaskDiv} h-screen fixed top-0 left-0 bg-zinc-800 opacity-85`}></div>
      <div className={`w-full ${addTaskDiv} h-screen fixed top-0 left-0 flex items-center justify-center`}>
        <AddTask setAddTaskDiv={setAddTaskDiv} />
      </div>
    </div>
  )
}

export default Dashboard