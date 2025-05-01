import { useReducer } from "react";

// import files
import todoContext from "./todoContext";
import todoReducer from "./todoReducer";
import { ADD_TASK } from "../types";

const TodoState = (props) => {
  const initialState = {
    todos: [
        "This is task 1",
        "This is task 2"
    ],
  };

  const addTask = (text) => {
    dispatch({
      type: ADD_TASK,
      payload: text,
    });
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <todoContext.Provider value={{
        addTask : addTask,
        todos : state.todos,
    }}>{props.children}</todoContext.Provider>
  );
};

export default TodoState;
