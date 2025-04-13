import React from 'react'
import TaskCart from './TaskCart'

const Complate = ({ task, setEditTasks, setSelectedTask }) => {
  return (
    <div className='flex flex-col gap-2'>
      {task.map((item, i) => (
        <TaskCart key={i} item={item} setEditTasks={setEditTasks}
          setSelectedTask={setSelectedTask} />
      ))}
    </div>
  )
}

export default Complate;