import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;

    const updatedTasks = [...tasks, newTask].sort();
    setTasks(updatedTasks);
    setNewTask('');
  };

  const removeTask = (taskToRemove) => {
    const updatedTasks = tasks.filter((task) => task !== taskToRemove);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
