import React, {useState} from 'react';
import TodoCreator from "./TodoCreator";
import './index.css';
import {getAllTodos} from "../../state/selectors";
import {useSelector} from 'react-redux';


const TodoList = () => {
    const todosList = useSelector(getAllTodos);
    const [toggleState, setToggleState] = useState(false);

    return (
        <div className={'todoList-container'}>
            <div className={'todoList-menu'}>
                <span className={'todoList-title'}>React Todos List</span>
                <div className={'todoList-fulfilled-container'}>
                    <span className={'todoList-fulfilled'}>Show fulfilled todos:</span>
                    <label className={'switch'}>
                        <input type={'checkbox'} onChange={() => setToggleState(!toggleState)} checked={toggleState}/>
                        <span className={'slider round'}/>
                    </label>
                </div>
            </div>
            {
                toggleState === false ?
                    todosList
                        .map(({text, color, fulfilled}, index) =>
                            <TodoCreator todoIndex={index} key={index} color={color} text={text}
                                         fulfilled={fulfilled}/>)
                        .filter(todoCreator => todoCreator.props.fulfilled === false) :
                    todosList
                        .map(({text, color, fulfilled}, index) =>
                            <TodoCreator todoIndex={index} key={index} color={color} text={text}
                                         fulfilled={fulfilled}/>)
            }
        </div>
    );
};


export default TodoList;