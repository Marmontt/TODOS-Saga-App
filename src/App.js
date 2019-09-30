import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {todosActions} from './state/todos'

import TodoMenu from "./components/TodoMenu";
import TodoList from "./components/TodoList";

import './App.css';

const App = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(todosActions.getTodos());
    }, []);

    return (
        <div className={'app-container'}>
            <TodoMenu/>
            <TodoList/>
        </div>
    );

};


export default App;
