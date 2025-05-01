import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { hideNotification, showNotification } from '../../redux/notificationSlice';
import { hideNotify, modalClickEvent } from '../../finction/function';

const EditTaskDiv = ({ setEditTasks, selectedTask }) => {
  const [tasksDetail, setTasksDetail] = useState({
    title: "",
    description: "",
    priority: "low",
    taskStatus: "Todo"
  });
  const dispatch = useDispatch();

  const editTaskRef = useRef(null);

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
      dispatch(showNotification({
        message: res.data.message,
        subTest: "",
      }));
      hideNotify(dispatch)
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
  };

  useEffect(()=>{

  modalClickEvent(editTaskRef, setEditTasks);

  },[setEditTasks]);


  return (
    <div ref={editTaskRef} className='bg-white rounded px-4 py-4 w-[40%] relative'>
      <button onClick={()=>setEditTasks("hidden")} className='absolute right-5 top-2.5 text-2xl'><IoIosCloseCircleOutline /></button>
      <h1 className="text-center font-semibold text-xl">Edit Task</h1>
      <hr className="mb-4 mt2" />
      <form className='flex flex-col gap-4'>
        <input type="text" className="border px-2 py-1 rounded border-zinc-300 outline-none" placeholder='Title' name='title' value={tasksDetail.title} onChange={selectDetails} />

        <div className="flex items-center justify-between gap-4">
          <select name="priority" onChange={selectDetails} value={tasksDetail.priority} className='border px-2 py-1 rounded border-zinc-300 outline-none w-full'>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <select name="taskStatus" onChange={selectDetails} value={tasksDetail.taskStatus} className='border px-2 py-1 rounded border-zinc-300 outline-none w-full'>
            <option value="Todo">Todo</option>
            <option value="InProgress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <textarea name="description" placeholder='Description' className="border px-2 py-1 rounded border-zinc-300 outline-none h-[25vh]" value={tasksDetail.description} onChange={selectDetails}></textarea>


        <div className="flex gap-4">
          <button className='w-full bg-blue-800 py-2 hover:bg-blue-700 transition-all duration-300 text-white rounded' onClick={addTask} type='submit'>Save</button>
          <button className='w-full  text-red-600 hover:bg-red-100 border border-red-600 py-2 rounded' onClick={() => deleteTask(tasksDetail._id)} type='button'>Delete</button>
          <button className='w-full border border-black py-2 hover:bg-zinc-100 transition-all duration-300 rounded' onClick={() => setEditTasks("hidden")} type='button'>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditTaskDiv;
