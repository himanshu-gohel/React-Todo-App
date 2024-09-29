import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let [todolist, setTodolist] = useState([]);

  let saveTodoList = (event) => {
    let toname = event.target.toname.value;

    if (!todolist.includes(toname)) {
      let finaltodolist = [...todolist, toname];
      setTodolist(finaltodolist);
    } else {
      alert("todo name already exist...");
    }
    event.preventDefault();
  };

  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={saveTodoList}>
        <input type="text" name="toname" />
        <button>Save</button>
      </form>

      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    let finaldata = todolist.filter((v, i) => i != indexNumber);
    setTodolist(finaldata);
  };

  let checkStatus = () => {
    setStatus(!status);
  };

  return (
    <li className={status ? "completetodo" : ""} onClick={checkStatus}>
      {" "}
      {indexNumber + 1}. {value}
      <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
