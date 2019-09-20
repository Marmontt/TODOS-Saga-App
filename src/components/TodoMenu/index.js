import React, {useState} from 'react';
import TodoColorBox from "./components/TodoColorBox";
import './index.css';

const TodoMenu = () => {
    const [todoText, setTodoText] = useState('');
    return (
        <div className={'todo-menu-container'}>
            <input
                className={'todo-menu-input'}
                type="text"
                placeholder={"Add New Item"}
                value={todoText}
                onChange={e => setTodoText(e.target.value)}
            />
            <TodoColorBox color={'#eb716a'}/>
            <TodoColorBox color={'#fe74a2'}/>
            <TodoColorBox color={'#9170cc'}/>
            <TodoColorBox color={'#5cb3f9'}/>
            <TodoColorBox color={'#6ed3e5'}/>
            <TodoColorBox color={'#ffe07f'}/>
            <button className={'todo-menu-button'}>Add</button>
        </div>
    )
};

export default TodoMenu;