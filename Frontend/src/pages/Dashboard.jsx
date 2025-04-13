import React, { useEffect, useState } from 'react';
import Header from '../components/dashboard/Header';
import AddTask from '../components/dashboard/AddTask';
import StickTitle from '../components/dashboard/StickTitle';
import InProgress from '../components/dashboard/InProgress';
import Todo from '../components/dashboard/Todo';
import Complate from '../components/dashboard/Complate';
import axios from 'axios';
import EditTaskDiv from '../components/dashboard/EditTaskDiv';

const Dashboard = () => {
  const [addTaskDiv, setAddTaskDiv] = useState("hidden");
  const [editTasks, setEditTasks] = useState("hidden");
  const [selectedTask, setSelectedTask] = useState(null); // ✅ NEW STATE
  const [todoTasks, setTodoTasks] = useState([]);
  const [todoListData, settodoListData] = useState([]);
  const [progressListData, setProgressListData] = useState([]);
  const [complateListData, setComplateListData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTodoTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/todo/all", { withCredentials: true });
        setTodoTasks(response.data.todos);
      } catch (error) {
        console.log(error);
        setError('Failed to fetch tasks');
      }
    };
    fetchTodoTasks();
  }, []);

  useEffect(() => {
    const filterTodo = todoTasks.filter((task) => task.taskStatus === "Todo");
    const filterProgress = todoTasks.filter((task) => task.taskStatus === "InProgress");
    const filterComplate = todoTasks.filter((task) => task.taskStatus === "Completed");
    settodoListData(filterTodo);
    setProgressListData(filterProgress);
    setComplateListData(filterComplate);
  }, [todoTasks]);

  return (
    <div className='w-full relative'>
      <div className="bg-white">
        <Header setAddTaskDiv={setAddTaskDiv} />
      </div>
      <div className="px-12 mg-4 flex gap-12 bg-zinc-100 min-h[89vh] max-h-auto">
        <div className="w-1/3">
          <StickTitle title={"Todo"} />
          <div className="pt-2">
            {todoListData.length > 0 ? (
              <Todo
                task={todoListData}
                setEditTasks={setEditTasks}
                setSelectedTask={setSelectedTask}
              />
            ) : <p>No tasks available</p>}
          </div>
        </div>
        <div className="w-1/3">
          <StickTitle title={"In Progress"} />
          <div className="pt-2">
            {progressListData.length > 0 ? (
              <InProgress
                task={progressListData}
                setEditTasks={setEditTasks}
                setSelectedTask={setSelectedTask}
              />
            ) : <p>No tasks available</p>}
          </div>
        </div>
        <div className="w-1/3">
          <StickTitle title={"Complate"} />
          <div className="pt-2">
            {complateListData.length > 0 ? (
              <Complate
                task={complateListData}
                setEditTasks={setEditTasks}
                setSelectedTask={setSelectedTask}
              />
            ) : <p>No tasks available</p>}
          </div>
        </div>
      </div>

      {/* Add Task Modal */}
      <div className={`w-full ${addTaskDiv} h-screen fixed top-0 left-0 bg-zinc-800 opacity-85`}></div>
      <div className={`w-full ${addTaskDiv} h-screen fixed top-0 left-0 flex items-center justify-center`}>
        <AddTask setAddTaskDiv={setAddTaskDiv} />
      </div>

      {/* Edit Task Modal */}
      <div className={`w-full ${editTasks} h-screen fixed top-0 left-0 bg-zinc-800 opacity-85`}></div>
      <div className={`w-full ${editTasks} h-screen fixed top-0 left-0 flex items-center justify-center`}>
        <EditTaskDiv setEditTasks={setEditTasks} selectedTask={selectedTask} />
      </div>
    </div>
  );
};

export default Dashboard;
