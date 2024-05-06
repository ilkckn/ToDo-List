import React from "react";
import "./ToDoList.css";
import { useState } from "react";
import { BsTrash2 } from "react-icons/bs";
import { IoMdCheckmark } from "react-icons/io";

function toDos() {
  const [allToDos, setAllToDos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [error, setError] = useState("");

  function handleAddToDo(e) {
    e.preventDefault();

    if (!newTitle || !newDescription) {
      setError("Please fill in both the Title and Description fields.");
      return;
    }

    let newToDo = {
      title: newTitle,
      description: newDescription,
    };

    let updatedToDo = [...allToDos];
    updatedToDo.push(newToDo);
    setAllToDos(updatedToDo);

    setNewTitle("");
    setNewDescription("");
    setError("");
  }

  function handleDelete(index) {
    const updatedToDos = allToDos.filter((_, i) => i !== index);
    setAllToDos(updatedToDos);
  }

  function handleDeleteAll() {
    setAllToDos([]);
  }

  return (
    <>
      <div className="toDosContainer">
        <form className="labelsInputs">
          <div className="title">
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="ToDo Title"
            />
          </div>
          <div className="description">
            <label>Description</label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="ToDo Description"
            />
          </div>
          <button type="submit" onClick={handleAddToDo}>
            Add
          </button>
        </form>
        {error && <p className="errorMessage">{error}</p>}
        {allToDos.length > 0 ? (
          <>
            {allToDos.map((item, i) => (
              <div className="toDoLists" key={i}>
                <div className="list">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="icons">
                  <BsTrash2 className="trash" onClick={() => handleDelete(i)} />
                  <IoMdCheckmark className="check" />
                </div>
              </div>
            ))}
            <button className="deleteAll" onClick={handleDeleteAll}>Delete All</button>
          </>
        ) : (
          <p className="errorMessage">No ToDos yet. Add some!</p>
        )}
      </div>
    </>
  );
}

export default toDos;
