import React from 'react';
import TaskCart from './TaskCart';

const TaskList = ({ task, setEditTasks, setSelectedTask }) => {
  // console.log(task);
  
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

export default TaskList;