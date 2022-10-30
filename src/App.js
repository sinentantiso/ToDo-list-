import React from "react";
import "./style.css";
import {useState} from "react"

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {setNewTask(e.target.value);}

  const addTask = () => {
    const task = { 
      id: todoList[todoList.length-1].id+1,
      taskName: newTask
    }
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  const deleteTask = (taskName) =>{
    const newTodoList = todoList.filter((task)=> task !== taskName);
    
    setTodoList(newTodoList);
  };



  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) =>{
          return(
            <div className="task">
              <h1>{task}</h1>
              <button onClick={() => deleteTask(task)}>x</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
