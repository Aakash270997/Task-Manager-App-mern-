import axios from 'axios';
import React, { useState } from 'react';

const AddTask = ({ setAddTaskDiv }) => {
  const [tasksDetail, setTasksDetail] = useState({
    title: "",
    description: "",
    priority: "low",  // FIXED
    taskStatus: "Todo"
  });

  const selectDetails = (e) => {
    const { name, value } = e.target;
    setTasksDetail({ ...tasksDetail, [name]: value });
  };

  const addTask = async (e) => {
    e.preventDefault();
    console.log("Sending Data:", tasksDetail);  // Debugging

    try {
      const res = await axios.post("http://localhost:5000/api/todo/create", tasksDetail, { withCredentials: true });
      console.log("Response:", res.data);
      // alertMsg(res.data.message)
      setTasksDetail({
        title:"",
        description: "",
        priority: "low",
        taskStatus: "Todo"
      });
      setAddTaskDiv("hidden")
    } catch (error) {
      console.error("Error:", error.response.data);
      alert(error.response.data.error);
    }
  };

  return (
    <div className='bg-white rounded px-4 py-4 w-[40%]'>
      <h1 className="text-center font-semibold text-xl">Add Task</h1>
      <hr className="mb-4 mt2" />
      <form action="" className='flex flex-col gap-4'>
        <input type="text" className="border px-2 py-1 rounded border-zinc-300 outline-none" 
          placeholder='Title' name='title' value={tasksDetail.title} onChange={selectDetails} 
        />

        <div className="flex items-center justify-between gap-4">
          <div className="w-full">
            <h3 className='mb-2'>Select Priority</h3>
            <select name="priority" id="" onChange={selectDetails} className='border px-2 py-1 rounded border-zinc-300 outline-none w-full'>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="w-full">
            <h3 className='mb-2'>Select taskStatus</h3>
            <select name="taskStatus" id="" onChange={selectDetails} className='border px-2 py-1 rounded border-zinc-300 outline-none w-full'>
              <option value="Todo">Todo</option>
              <option value="InProgress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <textarea name="description" placeholder='Description' id="" value={tasksDetail.description} 
          onChange={selectDetails} className="border px-2 py-1 rounded border-zinc-300 outline-none h-[25vh]">
        </textarea>

        <div className="flex items-center justify-between gap-4">
          <button className='w-full bg-blue-800 py-2 hover:bg-blue-700 transition-all duration-300 text-white rounded' 
            onClick={addTask}>Add Tasks</button>
          <button className='w-full border border-black py-2 hover:bg-zinc-100 transition-all duration-300 rounded' 
            onClick={() => setAddTaskDiv("hidden")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
