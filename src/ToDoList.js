import React, { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState(["Task 1", "Task 2"]);
  const [newTask, setNewTask] = useState("");
  const [editTasks, setEditTasks] = useState("");
  const [editingTaskIndex, setEditingTaskIndex] = useState(null); // Stores index of task being edited

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleInputChange2(event) {
    setEditTasks(event.target.value);
  }

  function addNewTask() {
    if (newTask.trim() !== "") {
      setTasks(tasks => [...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function   
 moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index   
 - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index   
 + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);   

    }
  }

  function editTask(index) {
    setEditingTaskIndex(index); // Set the index of the task being edited
    setEditTasks(tasks[index]); // Set the input field value to the existing task text
  }

  function saveEditedTask() {
    if (editTasks.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editingTaskIndex] = editTasks;
      setTasks(updatedTasks);
      setEditingTaskIndex(null);
      setEditTasks("");
    }
  }

  function cancelEdit() {
    setEditingTaskIndex(null); // Reset the editing state
    setEditTasks(""); // Clear the input field
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
        <button className="addButton"   
 onClick={addNewTask}>
          Add
        </button>
      </div>

      {tasks.length === 0 ? ( // Check if there are any tasks
        <p className="emptyList">There's nothing to do. Add a task to get started!</p>
      ) : (
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
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
                  <span className="text">{task}</span>
                  <button
                    className="deleteButton"
                    onClick={() => deleteTask(index)}
                  >
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