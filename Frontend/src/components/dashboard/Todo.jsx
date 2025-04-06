import React from 'react';
import TaskCart from './TaskCart';

const Todo = ({ task }) => {  // Destructure task to get it as a prop
  console.log("inside todo box ", task);  // Logs the task prop

  return (
    <div className='flex flex-col gap-2'>
      {task && task.length > 0 ? (
        task.map((item, i) => {
          return <TaskCart key={i} item={item} />;  // Return the TaskCart for each item
        })
      ) : (
        <p>No tasks available</p>  // Fallback message if no tasks
      )}
    </div>
  );
};

export default Todo;
