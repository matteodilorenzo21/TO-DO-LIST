import React, { useState } from 'react';
import './TodoForm.scss'
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';

function TodoForm({ addTodo, incompleteTasks }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;
        addTodo(input);
        setInput('');
    };

    return (
        <div id='form-section'>
            <div className="flex items-end">
                <h1 id='form-title' className='ms-5 flex items-center mb-0'>
                    <BorderColorIcon className='text-blue-950' />
                    <span className='ms-1 text-blue-950 font-bold'>Tasks
                        <span className='font-bold ms-[-5px]'> ({incompleteTasks})</span>
                    </span>
                </h1>
            </div>
            <form onSubmit={handleSubmit} className='flex'>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Cosa devi fare oggi?'
                    className='mx-2'
                />
                <button id='add-task-btn' type="submit" className='mx-2 flex items-center'>
                    <span>Aggiungi</span>
                    <AddIcon fontSize='medium' />
                </button>
            </form>
        </div>

    );

}

export default TodoForm;
