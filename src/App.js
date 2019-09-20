import React from 'react';
import TodoMenu from "./components/TodoMenu";
import TodoList from "./components/TodoList";
import './App.css';

document.body.style.background = '#ebf3f6';

function App() {
    return (
        <div className={'app-container'}>
            <TodoList/>
            <TodoMenu/>
        </div>
    );
}

export default App;