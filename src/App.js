import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {todosActions} from './state/todos'

import TodoMenu from "./components/TodoMenu";
import TodoList from "./components/TodoList";

import './App.css';

const App = (props) => {

    useEffect(() => {
        props.getTodos();
    }, []);

    return (
        <div className={'app-container'}>
            <TodoMenu/>
            <TodoList/>
        </div>
    );

};

const mapActionsToProps = {
    getTodos: todosActions.getTodos

};

export default connect(null, mapActionsToProps)(App);
