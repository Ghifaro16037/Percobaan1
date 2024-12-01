import React from 'react';

function TodoItem({ todo, index, markComplete }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => markComplete(index)}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
    </li>
  );
}

export default TodoItem;
