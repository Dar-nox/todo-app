import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([{ text: "Task 1", completed: false }, { text: "Task 2", completed: false }]);
  const [newTask, setNewTask] = useState("");
  const [editTasks, setEditTasks] = useState("");
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleInputChange2(event) {
    setEditTasks(event.target.value);
  }

  function addNewTask() {
    if (newTask.trim() !== "") {
      setTasks(tasks => [...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function completeTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function editTask(index) {
    setEditingTaskIndex(index);
    setEditTasks(tasks[index].text);
  }

  function saveEditedTask() {
    if (editTasks.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editingTaskIndex].text = editTasks;
      setTasks(updatedTasks);
      setEditingTaskIndex(null);
      setEditTasks("");
    }
  }

  function cancelEdit() {
    setEditingTaskIndex(null);
    setEditTasks("");
  }

  return (
    <div className="toDoList">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="addButton" onClick={addNewTask}>
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="emptyList">There's nothing to do. Add a task to get started!</p>
      ) : (
        <ol>
          {tasks.map((task, index) => (
            <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {editingTaskIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editTasks}
                    onChange={handleInputChange2}
                  />
                  <button className="saveButton" onClick={saveEditedTask}>
                    Save
                  </button>
                  <button className="cancelButton" onClick={cancelEdit}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span className="text">{task.text}</span>
                  <button
                    className="completeButton"
                    onClick={() => completeTask(index)}
                  >
                    Complete
                  </button>
                  <button className="deleteButton" onClick={() => deleteTask(index)}>
                    Delete
                  </button>
                  <button className="upButton" onClick={() => moveTaskUp(index)}>
                    Up
                  </button>
                  <button className="downButton" onClick={() => moveTaskDown(index)}>
                    Down
                  </button>
                  <button className="editButton" onClick={() => editTask(index)}>
                    Edit
                  </button>
                </>
              )}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default ToDoList;
