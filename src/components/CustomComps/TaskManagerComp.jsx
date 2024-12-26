"use client"


import React, { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, isEditing: false, selected: false }]);
      setNewTask("");
    }
  };

  const updateTask = (id, updatedText) => {
    setTasks(
      tasks.map(task => (task.id === id ? { ...task, text: updatedText, isEditing: false } : task))
    );
  };

  const deleteSelectedTasks = () => {
    setTasks(tasks.filter(task => !task.selected));
  };

  const toggleEdit = id => {
    setTasks(
      tasks.map(task => ({
        ...task,
        isEditing: task.id === id ? !task.isEditing : task.isEditing,
      }))
    );
  };

  const toggleSelection = id => {
    setTasks(
      tasks.map(task => (task.id === id ? { ...task, selected: !task.selected } : task))
    );
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.selected}
              onChange={() => toggleSelection(task.id)}
            />
            {task.isEditing ? (
              <input
                type="text"
                defaultValue={task.text}
                onBlur={e => updateTask(task.id, e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    updateTask(task.id, e.target.value);
                  }
                }}
                autoFocus
              />
            ) : (
              <span onDoubleClick={() => toggleEdit(task.id)}>{task.text}</span>
            )}
          </li>
        ))}
      </ul>
      <button onClick={deleteSelectedTasks}>Delete Selected Tasks</button>
    </div>
  );
};

export default TaskManager;
