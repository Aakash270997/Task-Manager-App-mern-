import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideNotification } from '../redux/notificationSlice';

const Notification = () => {

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     onClose();
  //   }, 3000); // auto close in 3 seconds

  //   return () => clearTimeout(timer);
  // }, [onClose]);

  const { show, message, subText } = useSelector(state => state.notification);
  const dispatch = useDispatch()

  if(!show) return null;

  return (
    <div className="fixed top-6 right-6 z-50 bg-white shadow-lg border rounded-md p-4 flex items-start space-x-4 w-[350px]">
      <div className="text-green-500 mt-1">
        ✅
      </div>
      <div className="flex-1">
        <p className="font-semibold text-gray-800">{message}</p>
        <p className="text-sm text-gray-500">{subText}</p>
      </div>
      <button onClick={()=>dispatch(hideNotification())} className="text-gray-400 hover:text-gray-600 text-xl leading-none">
        &times;
      </button>
    </div>
  );
};

export default Notification;