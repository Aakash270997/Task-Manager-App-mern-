import React, { useEffect, useState } from 'react'

const Todos = () => {
  const [todosList, setTodosList] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/todo/all", {
      method: "GET",
      credentials: "include", // If using cookies for authentication
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // const todos = data.map(todo => ({
        //   ...todo,
        //   taskStatus: todo.status,  // Fixing status mismatch
        // }));
        setTodosList(data.todos)
        // console.log(data);
        
      })
      .catch((error) => console.error("Error fetching todos:", error));
    }, []);
    // console.log(todosList);
  
  return (
    <div>
      <ul className='max-w-6/12 m-auto mt-7'>
        {todosList.map(item=>(
          <li className='gap-2.5 border border-amber-200 mb-3 bg-blue-300'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos