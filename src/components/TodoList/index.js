import React from 'react';
import TodoCreator from "../TodoMenu/components/TodoCreator";
import './index.css';
import {getAllTodos} from "../../state/selectors";
import {useSelector} from 'react-redux';


const TodoList = () => {
    const todosList = useSelector(getAllTodos);

    return (
        <div className={'todoList-container'}>
            <p className={'todoList-title'}>React Todo List</p>
            {
                todosList.map(({text, color, fulfilled}, index) =>
                    <TodoCreator todoIndex={index} key={index} color={color} text={text} fulfilled={fulfilled}/>)
            }
        </div>
    );
};


export default TodoList;