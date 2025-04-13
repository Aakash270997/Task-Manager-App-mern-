import React from 'react';
import TaskCart from './TaskCart';

const Todo = ({ task, setEditTasks, setSelectedTask }) => {
  return (
    <div className='flex flex-col gap-2'>
      {task && task.length > 0 ? (
        task.map((item, i) => (
          <TaskCart
            key={i}
            item={item}
            setEditTasks={setEditTasks}
            setSelectedTask={setSelectedTask}
          />
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default Todo;
