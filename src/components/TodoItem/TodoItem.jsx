import React from 'react';
import './TodoItem.scss';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

function TodoItem({ todo, toggleComplete, deleteTodo, nodeRef }) {
    return (
        <div ref={nodeRef} className='task w-full flex items-center px-5 py-2'>
            <span className={`status-indicator ${todo.completed ? 'completed' : 'pending'}`} />
            <span className='basis-8/12 ps-3'
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button className='basis-2/12 me-1 flex items-center justify-center' id='complete-task-btn' onClick={() => toggleComplete(todo.id)}>
                {todo.completed ? (
                    <>
                        Da Fare
                        <AccessTimeSharpIcon className='ms-1' />
                    </>
                ) : (
                    <>
                        Completato
                        <CheckSharpIcon className='ms-1' />
                    </>
                )}
            </button>
            <button className='basis-2/12 ms-1 flex items-center justify-center' id='delete-task-btn' onClick={() => deleteTodo(todo.id)}>
                <span>Rimuovi</span>
                <DeleteSharpIcon />
            </button>
        </div>
    );
}

export default TodoItem;
