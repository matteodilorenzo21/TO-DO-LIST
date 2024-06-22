import React from 'react';
import './TodoItem.scss';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import ReplaySharpIcon from '@mui/icons-material/ReplaySharp';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import TimerSharpIcon from '@mui/icons-material/TimerSharp';

function TodoItem({ todo, toggleComplete, deleteTodo, nodeRef }) {
    const formatCompletionDate = (date) => {
        if (!date) return '';
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(date).toLocaleString('it-IT', options);
    };

    return (
        <div ref={nodeRef} className='task flex items-center px-5 py-2'>
            <span className='status-icon me-1'>
                {todo.completed ? (
                    <CheckCircleOutlineSharpIcon fontSize='medium' style={{ color: 'green' }} />
                ) : (
                    <TimerSharpIcon fontSize='medium' style={{ color: 'goldenrod' }} />
                )}
            </span>
            <span className='basis-10/12 ps-3'>
                {todo.text}
                {todo.completed && (
                    <span className='text-xs text-gray-500 block'>
                        Completato in data {formatCompletionDate(todo.completionDate)}
                    </span>
                )}
            </span>
            <button className='basis-1/12 me-1 flex items-center justify-center' id='complete-task-btn' onClick={() => toggleComplete(todo.id)}>
                {todo.completed ? (
                    <ReplaySharpIcon />
                ) : (
                    <CheckSharpIcon />
                )}
            </button>
            <button className='basis-1/12 ms-1 flex items-center justify-center' id='delete-task-btn' onClick={() => deleteTodo(todo.id)}>
                <ClearSharpIcon />
            </button>
        </div>
    );
}

export default TodoItem;
