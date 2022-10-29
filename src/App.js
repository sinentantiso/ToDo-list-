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

  const deleteTask = (taskName) =>{
    const newTodoList = todoList.filter((task)=> {
      if (task === taskName){
        return false;
      }else {
        return true;
      }
    })
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
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}>x</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}
