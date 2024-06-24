import React, { useState } from 'react';
import './App.css';
import './tailwind.scss';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false, completionDate: null };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed, completionDate: !todo.completed ? new Date() : null }
        : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const filteredTodos = todos
    .filter(todo => {
      if (filter === 'todo') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    })
    .sort((a, b) => {
      if (a.completed === b.completed) {
        return 0;
      }
      return a.completed ? 1 : -1;
    });

  const incompleteTasks = todos.filter(todo => !todo.completed).length;
  const completedTasks = todos.filter(todo => todo.completed).length;

  return (
    <>
      <Navbar />
      <section id='task-section'>
        <TodoForm
          addTodo={addTodo}
          incompleteTasks={incompleteTasks}
          filter={filter}
          setFilter={setFilter}
          incompleteCount={incompleteTasks}
          completedCount={completedTasks}
          totalCount={todos.length}
          deleteAllTodos={deleteAllTodos}
        />
        <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </section>
    </>
  );
}

export default App;
