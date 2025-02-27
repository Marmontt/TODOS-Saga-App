import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import TodoCreator from "./TodoCreator";
import {getTodos} from "../../state/selectors";

import './index.css';


export const TodoList = () => {
    const [toggleState, setToggleState] = useState(false);
    const todos = useSelector(state => getTodos(state, toggleState));

    return (
        <div className={'todoList-container'}>
            <div className={'todoList-menu'}>
                <span className={'todoList-title'}>React Todos List</span>
                <div className={'todoList-fulfilled-container'}>
                    <span className={'todoList-fulfilled'}>Show fulfilled todos too:</span>
                    <label className={'switch'}>
                        <input type={'checkbox'} onChange={() => setToggleState(!toggleState)} checked={toggleState}/>
                        <span className={'slider round'}/>
                    </label>
                </div>
            </div>
            {
                todos.map(({text, color, fulfilled, id}, index) => <TodoCreator todoIndex={id} key={index}
                                                                                color={color}
                                                                                text={text === '' ? 'Empty todo!' : text}
                                                                                fulfilled={fulfilled}/>)
            }
        </div>
    );
};


export default TodoList;
