import "./App.css";

//import components
import Form from "./components/Form";

// import states
import TodoState from "./context/todo/TodoState";

function App() {
  return (
    <TodoState>
      <Form />
    </TodoState>
  );
}

export default App;
