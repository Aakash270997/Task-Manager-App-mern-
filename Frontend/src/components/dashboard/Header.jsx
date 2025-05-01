import React from 'react';
import { IoLogOutOutline } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { hideNotification, showNotification } from '../../redux/notificationSlice';
import { useDispatch } from 'react-redux';
import { hideNotify } from '../../finction/function';

const Header = ({setAddTaskDiv}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
      // alert(res.data.message);
      localStorage.clear("userLoggedin");
      navigate("/login");
      dispatch(showNotification({
        message: res.data.message,
        subText: ""
      }));
      hideNotify(dispatch);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex px-12 py-4 items-center border-b justify-between'>
      <div>
        <h1 className="text-2xl text-blue-800 font-semibold">Manage your Tasks</h1>
      </div>
      <div className="flex gap-8">
        <button className="button hover:text-blue-800 transition-all duration-300" onClick={()=>setAddTaskDiv("block")}>Add Task</button>
        <button className="text-2xl hover:text-red-800 transition-all duration-300" onClick={logout}><IoLogOutOutline /></button>
      </div>
    </div>
  )
}

export default Header