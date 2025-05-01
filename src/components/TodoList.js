import React from "react";
import todoContext from "../context/todo/todoContext";
import "../App.css"
import { useContext } from "react";

function TodoList() {
  const {todos} = useContext(todoContext);

  return (
    <ul>
      {todos.map((task) => {
        return <li className="listTask">{task}</li>;
      })}
    </ul>
  );
}

export default TodoList;
