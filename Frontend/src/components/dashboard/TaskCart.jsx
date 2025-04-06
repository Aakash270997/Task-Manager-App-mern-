import React from 'react';

const TaskCart = ({ item }) => {
  console.log(item);  // Logs the task object

  return (
    <button className='bg-white rounded px-4 w-full transition-all duration-300'>
      <div className="flex item-center justify-between">
        <h3>{item.title}</h3>
        <div className="txt-sm text-green-500 bg-green-100 px-2 rounded-full">
          <p>{item.priority}</p>  {/* Assuming priority is low for all tasks */}
        </div>
      </div>
      <hr className="my-2" />
      <p className="text-sm text-zinc-500 text-start">
        {item.description}
      </p>
    </button>
  );
};

export default TaskCart;
