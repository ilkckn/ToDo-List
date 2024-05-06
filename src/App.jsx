import React from "react";
import "./App.css";
import ToDos from "./components/ToDosList";

function App() {
  return (
    <>
      <div className="appBody">
        <h1>My ToDo List</h1>
        <ToDos />
      </div>
    </>
  );
}

export default App;
