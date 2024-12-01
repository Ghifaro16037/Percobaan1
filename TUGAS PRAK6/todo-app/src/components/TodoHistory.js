import React, { useEffect, useState } from 'react';

function TodoHistory() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  return (
    <div>
      <h2>Task History</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoHistory;
