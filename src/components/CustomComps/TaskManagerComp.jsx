"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import {
  IconTargetArrow,
  IconTrash,
} from "@tabler/icons-react";
import { useState } from "react";

export default function TaskManagerComp({
  className,
}) {
  const [tasks, setTasks] = useState([]);
  // const [taskInput, setTaskInput] = useState('')
  const [allTasksSelected, setAllTasksSelected] = useState(false);

  const addTasks = (inputValue) => {
    if (inputValue.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: inputValue, isEditing: false, selected: false },
      ]);
    }
  };

  const updateTask = (id, updatedText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: updatedText, isEditing: false } : task
      )
    );
  };

  const toggleSelected = (id) => {
    let changedTasksArr = tasks.map((task) =>
      task.id === id ? { ...task, selected: !task.selected } : task
    );
    setTasks(changedTasksArr);

    let selectedTasks = changedTasksArr.every((task) => task.selected);
    console.log("selectedTasks: ", selectedTasks);
    if (selectedTasks) {
      setAllTasksSelected(true);
      console.log("selectedTasks: ", selectedTasks);
    } else {
      setAllTasksSelected(false);
    }
  };

  const toggleEditing = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const deleteSelectedTasks = () => {
    if (tasks.length !== 0) {
      setTasks(tasks.filter((task) => !task.selected));
    }
    if (allTasksSelected) setAllTasksSelected((prev) => !prev);
  };

  const selectAllTasks = () => {
    if (tasks.length !== 0) {
      setAllTasksSelected((prev) => !prev);
      setTasks(tasks.map((task) => ({ ...task, selected: !allTasksSelected })));
    }
  };

  const getInputedValue = (event) => {
    // Access the value from the input field
    const inputValue = event.target.querySelector("input").value;

    addTasks(inputValue);
    // Log or handle the submitted value
    console.log("Submitted Value:", inputValue);
  };

  const placeholders = [
    "Add Tasks Here ...",
    "Double Tap on the Task to Edit it",
    "For Delete Multiple Tasks,Select & Delete",
    "For Delete All Tasks,Select All & Delete",
  ];

  return (
    // <div className="h-screen bg-lightBg-1 p-4 bg-cover flex flex-col justify-center items-center">
      <div className={`bg-white border capitalize w-full h-full p-3 rounded-3xl flex flex-col gap-4 ${className}`}>
        <ul className=" flex gap-2 bg-green-00">
          <IconTargetArrow rotate={100} />
          <li>tasks manager</li>
        </ul>

          <PlaceholdersAndVanishInput
          maxLength={20}
          className={"h-"}
          placeholders={placeholders}
          onSubmit={getInputedValue}
          />
        
        <div className="flex bg-red-00 justify-between ">
            <div className="flex gap-2">
              <input
                id="selectAll"
                type="checkbox"
                checked={allTasksSelected}
                onChange={() => selectAllTasks()}
              />
              <label htmlFor="selectAll">Select all</label>
            </div>
            <IconTrash
            className=""
            cursor={"Pointer"}
            onClick={() => deleteSelectedTasks()}
          />
        </div>

        <div className="bg-red-00 text- h-[70%] overflow-y-scroll flex flex-col gap-3">
          {tasks.map((task) => (
            <div 
            key={task.id} 
            className="flex gap-4 bg-blue-50 p-4 rounded-xl">
              <input
                type="checkbox"
                id={task.id}
                checked={task.selected}
                onChange={() => toggleSelected(task.id)}
              />
              {task.isEditing ? (
                <input
                  type="text"
                  defaultValue={task.text}
                  onBlur={(e) => updateTask(task.id, e.target.value)}
                  autoFocus
                />
              ) : (
                <div className="flex justify-between w-full">
                   <label
                  htmlFor={task.id}
                  onDoubleClick={() => toggleEditing(task.id)}
                >
                  {task.text}
                </label>
                <h1>{new Date(task.id).toLocaleDateString()}</h1>
                </div>
               
              )}
            </div>
          ))}
        </div>
      </div>
    // </div>
  );
}
