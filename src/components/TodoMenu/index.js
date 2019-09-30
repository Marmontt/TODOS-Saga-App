import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux'

import * as todoActions from '../../state/todos/action'
import TodoColorBox from "./components/TodoColorBox";

import './index.css';

export const TodoMenu = (props) => {
    const [todoText, setTodoText] = useState('');
    const [chosenColor, setColor] = useState('#eb716a');
    const dispatch = useDispatch();

    return (
        <div className={'todo-menu-container'}>
            <input
                className={'todo-menu-input'}
                type="text"
                placeholder={"Add New Item"}
                value={todoText}
                onClick={() => setTodoText('')}
                onChange={e => setTodoText(e.target.value)}
            />
            <TodoColorBox chosenColor={chosenColor} setColor={setColor} color={'#eb716a'}/>
            <TodoColorBox chosenColor={chosenColor} setColor={setColor} color={'#fe74a2'}/>
            <TodoColorBox chosenColor={chosenColor} setColor={setColor} color={'#9170cc'}/>
            <TodoColorBox chosenColor={chosenColor} setColor={setColor} color={'#5cb3f9'}/>
            <TodoColorBox chosenColor={chosenColor} setColor={setColor} color={'#6ed3e5'}/>
            <TodoColorBox chosenColor={chosenColor} setColor={setColor} color={'#ffe07f'}/>
            <button onClick={() => dispatch(todoActions.addTodo(todoText, chosenColor))} className={'todo-menu-button'}>Add</button>
        </div>
    )
};


export default TodoMenu;
