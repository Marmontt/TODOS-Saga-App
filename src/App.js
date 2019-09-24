import React from 'react';

import TodoMenu from "./components/TodoMenu";
import TodoList from "./components/TodoList";

import './App.css';


function App() {
    return (
        <div className={'app-container'}>
            <TodoMenu/>
            <TodoList/>
        </div>
    );
}

export default App;
