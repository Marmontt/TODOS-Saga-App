import React from 'react';
import TodoCreator from "../TodoMenu/components/TodoCreator";
import './index.css';

const TodoList = () => {
    return (
        <div className={'todoList-container'}>
            <p className={'todoList-title'}>React Todo List</p>
            <TodoCreator color={'#f5a'} text={'Blah-blah-blah'}/>
            <TodoCreator color={'#9170cc'} text={'Blah-blah-blah'}/>
            <TodoCreator color={'#5cb3f9'} text={'Blah-blah-blah'}/>
            <TodoCreator color={'#ffe07f'} text={'Blah-blah-blah'}/>
        </div>
    );
};

export default TodoList;