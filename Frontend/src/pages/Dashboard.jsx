import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/dashboard/Header';
import AddTask from '../components/dashboard/AddTask';
import StickTitle from '../components/dashboard/StickTitle';
import EditTaskDiv from '../components/dashboard/EditTaskDiv';
import TaskList from '../components/dashboard/TaskList';

const Dashboard = () => {
  const [addTaskDiv, setAddTaskDiv] = useState("hidden");
  const [editTasks, setEditTasks] = useState("hidden");
  const [selectedTask, setSelectedTask] = useState(null);
  const [todoTasks, setTodoTasks] = useState([]);
  const [todoListData, settodoListData] = useState([]);
  const [progressListData, setProgressListData] = useState([]);
  const [complateListData, setComplateListData] = useState([]);

  useEffect(() => {
    const fetchTodoTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/todo/all", { withCredentials: true });
        setTodoTasks(response.data.todos);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodoTasks();
  }, [todoTasks]);

  useEffect(() => {
    const filterTodo = todoTasks.filter(task => task.taskStatus === "Todo");
    const filterProgress = todoTasks.filter(task => task.taskStatus === "InProgress");
    const filterComplate = todoTasks.filter(task => task.taskStatus === "Completed");
    settodoListData(filterTodo);
    setProgressListData(filterProgress);
    setComplateListData(filterComplate);
  }, [todoTasks]);

  return (
    <div className='w-full relative'>
      <div className="bg-white">
        <Header setAddTaskDiv={setAddTaskDiv} />
      </div>
      <div className="px-12 mg-4 flex gap-12 min-h-[100vh] max-h-auto">
        <div className="w-1/3 bg-[#f3f3f3] p-1.5">
          <StickTitle title={"Todo"} bgColor="bg-[#e5e5e5]" />
          <div className="pt-2">
            {todoListData.length > 0 ? (
              <TaskList
                task={todoListData}
                setEditTasks={setEditTasks}
                setSelectedTask={setSelectedTask}
                style="todo"
              />
            ) : <p>No tasks available</p>}
          </div>
        </div>
        <div className="w-1/3 bg-[#f2f8fe] p-1.5">
          <StickTitle title={"In Progress"} bgColor="bg-[#0880ea]" />
          <div className="pt-2">
            {progressListData.length > 0 ? (
              <TaskList
                task={progressListData}
                setEditTasks={setEditTasks}
                setSelectedTask={setSelectedTask}
              />
            ) : <p>No tasks available</p>}
          </div>
        </div>
        <div className="w-1/3 bg-[#f4faf7] p-1.5">
          <StickTitle title={"Complate"} bgColor="bg-[#299764]" />
          <div className="pt-2">
            {complateListData.length > 0 ? (
              <TaskList
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
