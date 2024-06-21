import React, { useRef } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './TodoList.scss';

function TodoList({ todos, toggleComplete, deleteTodo }) {
    return (
        <section id='todo-list'>
            <TransitionGroup component="ul" className='w-[1000px]'>
                {todos.map(todo => (
                    <CSSTransition
                        key={todo.id}
                        timeout={500}
                        classNames="todo"
                        nodeRef={todo.nodeRef} // Assicurati di aggiungere nodeRef correttamente
                    >
                        <li ref={todo.nodeRef} className="todo"> {/* Usa nodeRef direttamente */}
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                toggleComplete={toggleComplete}
                                deleteTodo={deleteTodo}
                                nodeRef={todo.nodeRef} // Assicurati di passare nodeRef a TodoItem
                            />
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </section>
    );
}

export default TodoList;
