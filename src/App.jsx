import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './tailwind.scss'
import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const incompleteTasks = todos.filter(todo => !todo.completed).length;

  return (
    <>
      <Navbar />
      <section id='task-section'>
        <TodoForm addTodo={addTodo} incompleteTasks={incompleteTasks} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </section>
    </>
  );
}

export default App
