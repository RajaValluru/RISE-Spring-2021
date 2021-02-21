import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 10000),
        value: task,
        isCompleted: false,
      };

      setTaskList([...tasklist, taskDetails]);
    }
  };

  const updateTask = (e,id) => {
    e.preventDefault();
    //Finding element Index
    const element = tasklist.findIndex((elem) => elem.id == id);

    //Copy the array
    const newTaskList = [...tasklist];

    //edit our element
    newTaskList[element] = {
      ...newTaskList[element],
      value: e.target.value,
    };
    setTaskList(newTaskList);

  };

  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id != id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    //Finding element Index
    const element = tasklist.findIndex((elem) => elem.id == id);

    //Copy the array
    const newTaskList = [...tasklist];

    //edit our element
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTaskList(newTaskList);
  };

  return (
    <div className="todo">
      <input className="taskEnter"
        type="text"
        name="text"
        id="text"
        onChange={(e) => handleChange(e)}
        placeholder="Enter Task..."
      />
      <button className="add-btn" onClick={addTask}>
        Add
      </button>
      <br />
      {tasklist !== [] ? (
        <ul>
          {tasklist.map((t) => (
            <li className={t.isCompleted ? "crossText" : "update"}>
              <input className={t.isCompleted ? "crossText" : "update"} type="text" id={t.id} value={t.value} onChange={(e)=>{updateTask(e,t.id)}}/>
              <button
                className="completed"
                onClick={(e) => taskCompleted(e, t.id)}
              >
                Completed
              </button>

              <button className="delete" onClick={(e) => deletetask(e, t.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default TodoList;
