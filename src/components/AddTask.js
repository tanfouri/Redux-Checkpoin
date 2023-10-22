// components/AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/tasks';

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskDescription) {
      dispatch(addTask({ id: Date.now(), description: taskDescription, isDone: false }));
      setTaskDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={taskDescription}
        onChange={e => setTaskDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
