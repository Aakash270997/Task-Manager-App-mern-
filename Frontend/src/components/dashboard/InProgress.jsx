import React from 'react'
import TaskCart from './TaskCart'

const InProgress = ({ task }) => {
  return (
    <div className='flex flex-col gap-2'>
      {task && task.length > 0 ? (
        task.map((item, i)=>(
          <TaskCart key={i} item={item} />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  )
}

export default InProgress