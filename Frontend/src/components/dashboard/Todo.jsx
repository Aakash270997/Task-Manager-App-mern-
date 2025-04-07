import React from 'react';
import TaskCart from './TaskCart';

const Todo = ({ task }) => {
  // console.log("inside todo box ", task);

  return (
    <div className='flex flex-col gap-2'>
      {task && task.length > 0 ? (
        task.map((item, i) => {
          return <TaskCart key={i} item={item} />;
        })
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default Todo;
