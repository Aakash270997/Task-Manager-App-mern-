import React, { useEffect, useState } from 'react';
import Header from '../components/dashboard/Header';
import AddTask from '../components/dashboard/AddTask';
import StickTitle from '../components/dashboard/StickTitle';
import InProgress from '../components/dashboard/InProgress';
import Todo from '../components/dashboard/Todo';
import Complate from '../components/dashboard/Complate';
import axios from 'axios';
// import AlertData from '../components/AlertData';

const Dashboard = () => {
  const [addTaskDiv, setAddTaskDiv] = useState("hidden");
  const [todoTasks, setTodoTasks] = useState([]);
  const [todoListData, settodoListData] = useState([]);  // Initialize as an empty array
  const [error, setError] = useState('');  // Optional: Handle errors

  useEffect(() => {
    const fetchTodoTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/todo/all", { withCredentials: true });
        console.log(response.data.todos);
        setTodoTasks(response.data.todos);
      } catch (error) {
        console.log(error);
        setError('Failed to fetch tasks'); // Optional: Set error message
      }
    };
    fetchTodoTasks();
  }, []);

  useEffect(() => {
    const filterTodo = todoTasks.filter((task) => task.taskStatus === "Todo");
    settodoListData(filterTodo);
  }, [todoTasks]);

  console.log("todoListData", todoListData);

  return (
    <div className='w-full relative'>
      <div className="bg-white">
        {/* <AlertData alertMsg={alertMsg} /> */}
        <Header setAddTaskDiv={setAddTaskDiv} />
      </div>
      <div className="px-12 mg-4 flex gap-12 bg-zinc-100 min-h[89vh] max-h-auto">
        <div className="w-1/3">
          <StickTitle title={"Todo"} />
          <div className="pt-2">
            {todoListData.length > 0 ? <Todo task={todoListData} /> : <p>No tasks available</p>}
          </div>
        </div>
        <div className="w-1/3">
          <StickTitle title={"In Progress"} />
          <div className="pt-2">
            <InProgress />
          </div>
        </div>
        <div className="w-1/3">
          <StickTitle title={"Complate"} />
          <div className="pt-2">
            <Complate />
          </div>
        </div>
      </div>

      {/* Model */}
      <div className={`w-full ${addTaskDiv} h-screen fixed top-0 left-0 bg-zinc-800 opacity-85`}></div>
      <div className={`w-full ${addTaskDiv} h-screen fixed top-0 left-0 flex items-center justify-center`}>
        <AddTask setAddTaskDiv={setAddTaskDiv} />
      </div>
      {/* <Todos /> */}
    </div>
  );
};

export default Dashboard;
