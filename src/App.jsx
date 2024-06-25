import React, { useState } from 'react';
import './App.scss';
import './tailwind.scss';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false, completionDate: null, nodeRef: React.createRef() };
    setTodos([...todos, newTodo]);
    showSnackbar('Task creato con successo', 'info');
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
    showSnackbar('Task eliminato con successo', 'info');
  };

  const deleteAllTodos = () => {
    if (todos.length === 0) {
      showSnackbar('Non ci sono task da eliminare', 'warning');
      return;
    }
    setTodos([]);
    showSnackbar(todos.length + ' tasks sono stati eliminati con successo', 'info');
  };

  const showSnackbar = (message, severity) => {
    setAlertMessage(message);
    setAlertSeverity(severity);
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
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
        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </section>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleSnackbarClose} severity={alertSeverity} variant='filled'>
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
