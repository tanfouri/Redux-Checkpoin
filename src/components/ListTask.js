// components/ListTask.js
import React from 'react';
import { useSelector } from 'react-redux';
import { setFilter } from '../actions/tasks';

const ListTask = () => {
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.filter);

  const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => (filter === 'done' ? task.isDone : !task.isDone));

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('notDone')}>Not Done</button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
