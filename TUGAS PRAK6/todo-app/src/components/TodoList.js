import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, markComplete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          markComplete={markComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
