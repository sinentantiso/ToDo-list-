import React from "react";
import "./style.css";
import {useState} from "react"

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {setNewTask(e.target.value);}

  const addTask = () => {
    const newTodoList = [...todoList, newTask];
    setTodoList(newTodoList);
  };

  const deleteTask = () =>{};

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) =>{
          return(
            <div>
              <h1>{task}</h1>
              <button onClick={deleteTask}>x</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
