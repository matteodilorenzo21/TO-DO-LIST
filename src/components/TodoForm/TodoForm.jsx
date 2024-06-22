import React, { useState } from 'react';
import './TodoForm.scss';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SelectLabels from '../SelectLabels/SelectLabels';

function TodoForm({ addTodo, incompleteTasks, filter, setFilter, incompleteCount, completedCount, totalCount }) {
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
                <h1 id='form-title' className='ms-2 flex items-center mb-0'>
                    <BorderColorIcon className='text-blue-950' />
                    <span className='ms-1 text-blue-950 font-bold'>Tasks</span>
                </h1>
            </div>
            <form onSubmit={handleSubmit} className='flex items-center'>
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
                <SelectLabels
                    filter={filter}
                    setFilter={setFilter}
                    totalCount={totalCount}
                    incompleteCount={incompleteCount}
                    completedCount={completedCount}
                />
            </form>
        </div>
    );
}

export default TodoForm;
