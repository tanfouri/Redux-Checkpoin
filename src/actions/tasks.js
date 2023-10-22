// actions/tasks.js
//import React from 'react';

export const addTask = task => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const toggleTask = taskId => ({
    type: 'TOGGLE_TASK',
    payload: taskId,
  });
  
  export const setFilter = filter => ({
    type: 'SET_FILTER',
    payload: filter,
  });

  