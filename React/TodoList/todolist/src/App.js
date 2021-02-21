import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
//Calling our todo
function App() {
  return (
    <div className="App">
      <span className="title">Todo List</span> <br />
      
      <TodoList />
    </div>
  );
}

export default App;
