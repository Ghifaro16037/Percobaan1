import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoHistory from './components/TodoHistory';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const markComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Add Task</Link></li>
            <li><Link to="/history">Task History</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <h1>TaskMaster</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} markComplete={markComplete} />
          </Route>
          <Route path="/history">
            <h1>TaskMaster - History</h1>
            <TodoHistory />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
