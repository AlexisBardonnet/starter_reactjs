import React, { useCallback } from 'react';
/** Style **/
import "./TodoList.scss";
/** Plugins **/
import {useDispatch, useSelector} from 'react-redux';
import { todoListSelector } from '../../redux/TodoList/TodoListSelector';
import { deleteTodoAction, toggleTodoAction } from '../../redux/TodoList/TodoListActions';

/* Todo line item */
function TodoItem({todo, onToggle, onDelete}){
    return (
        <div className="todolist-item">
            <input className="todolist-checkbox" type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)}></input>
            <div className="todolist-item-text">{todo.title}</div>
            <button onClick={() => onDelete(todo)}>X</button>
        </div>
    )
}

/* Todo list */
function TodoList({todos, onToggle, onDelete}){
    return(
        <div className="todolist">
            {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} key={todo.id} onDelete={onDelete} />)}
        </div>
    );
}


export function TodoListStore (){
    const todos = useSelector(todoListSelector);
    const dispatch = useDispatch();
    const onToggle = useCallback(todo => {
        dispatch(toggleTodoAction(todo))
    }, []);
    const onDelete = useCallback(todo =>{
        dispatch(deleteTodoAction(todo))
    }, []);
    return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
}


