import React, {useState} from 'react';
import './index.css';
import * as todoActions from "../../../../state/todos/action";
import {connect} from 'react-redux';

const TodoCreator = ({color, text, fulfilled, removeTodo, todoIndex}) => {
    const [todoFulfilled, setTodoState] = useState(fulfilled);

    return (
        <div style={{background: color}} className={'todoCreator-container'}>
            <input onChange={() => {
                console.log(fulfilled);
                // setTodoState(true);
                removeTodo(todoIndex);
            }} className={'todoCreator-checkbox'} checked={todoFulfilled} type="checkbox"/>
            <div className={'todoCreator-text'}>{text}</div>
        </div>
    );
};

const mapActionsToProps = {
    removeTodo: todoActions.removeTodo
};

export default connect(null, mapActionsToProps)(TodoCreator);