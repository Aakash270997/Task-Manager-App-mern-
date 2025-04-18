import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditTaskDiv = ({ setEditTasks, selectedTask }) => {
  const [tasksDetail, setTasksDetail] = useState({
    title: "",
    description: "",
    priority: "low",
    taskStatus: "Todo"
  });
  // console.log(`http://localhost:5000/api/todo/update/&{selectedTask._id}`)
  useEffect(() => {
    if (selectedTask) {
      setTasksDetail(selectedTask);
    }
  }, [selectedTask]);

  const selectDetails = (e) => {
    const { name, value } = e.target;
    setTasksDetail({ ...tasksDetail, [name]: value });
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5000/api/todo/update/${selectedTask._id}`, tasksDetail, { withCredentials: true });
      setEditTasks("hidden");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/todo/delete/${id}`, {withCredentials:true});
      setEditTasks("hidden");
    } catch (error) {
      console.error(error);
      alert("Failed to delete task");
    }
  }

  return (
    <div className='bg-white rounded px-4 py-4 w-[40%]'>
      <h1 className="text-center font-semibold text-xl">Edit Task</h1>
      <hr className="mb-4 mt2" />
      <form className='flex flex-col gap-4'>
        <input type="text" className="border px-2 py-1 rounded" placeholder='Title' name='title' value={tasksDetail.title} onChange={selectDetails} />

        <textarea name="description" placeholder='Description' className="border px-2 py-1 rounded h-[25vh]" value={tasksDetail.description} onChange={selectDetails}></textarea>

        <div className="flex gap-4">
          <select name="priority" onChange={selectDetails} value={tasksDetail.priority} className='border px-2 py-1 rounded w-full'>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <select name="taskStatus" onChange={selectDetails} value={tasksDetail.taskStatus} className='border px-2 py-1 rounded w-full'>
            <option value="Todo">Todo</option>
            <option value="InProgress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="flex gap-4">
          <button className='w-full bg-blue-800 py-2 text-white rounded' onClick={addTask} type='submit'>Save</button>
          <button className='w-full  text-red-600 hover:bg-red-100 border border-red-600 py-2 rounded' onClick={() => deleteTask(tasksDetail._id)} type='button'>Delete</button>
          <button className='w-full border py-2 rounded' onClick={() => setEditTasks("hidden")} type='button'>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskDiv;
