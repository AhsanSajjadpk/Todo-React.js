// actions jo state ko update kr raha hon ga

import { ADD_TASK } from "../types";

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todos : [...state.todos, action.payload]
      };

    default:
      return {
        ...state,
      };
  }
};

export default todoReducer;
