import { useState, useContext } from "react";
import React from "react";
import todoContext from "../context/todo/todoContext";
import '../App.css';
import TodoList from "./TodoList";

const Form = () => {
  const { addTask } = useContext(todoContext);

  const [task, setTask] = useState({
    text: "",
  });

  const onChange = (e) => {
    setTask({ text: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (task.text === "") {
      alert("Enter your task");
    } else {
      addTask(task.text);
      setTask({
        text: ""
      });
    }
  };

  return (
    <div className="App">
      <div className='work'>
      <h1>Todo Application using Context Api</h1>
    <form onSubmit={onSubmit}>
      <div className="row">
        
        <input
          type="text"
          onChange={onChange}
          placeholder="Enter your task"
          className="add-task"
          id="add"
        />
        <input type="submit" value={"Add Task"} id="btn" />
      </div>
    </form>
    <TodoList /> 
      </div>
      </div>
  );
};

export default Form;
