import React from 'react'
import TaskCart from './TaskCart'

const Complate = ({task}) => {
  return (
    <div className='flex flex-col gap-2'>
      {task.map((item, i) => (
        <TaskCart key={i} item={item} />
      ))}
    </div>
  )
}

export default Complate