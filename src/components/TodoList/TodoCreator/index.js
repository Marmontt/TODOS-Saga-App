import React from 'react';
import {useDispatch} from 'react-redux';

import * as todoActions from "../../../state/todos/action";

import './index.css';


const TodoCreator = ({color, text, fulfilled, todoIndex}) => {
    const dispatch = useDispatch();
    return (
        <div style={{background: color}} className={'todoCreator-container'}>
            {fulfilled === true ?
                <hr className={'todoCreator-line'} color={'#000'}/>
                : null}
            <div className={'todoCreator-content'}>
                <input onChange={() => {
                    dispatch(todoActions.setFulfilledState(todoIndex, !fulfilled));
                }} className={'todoCreator-checkbox'} checked={fulfilled} type="checkbox"/>
                <div className={'todoCreator-text'}>{text}</div>
            </div>
        </div>
    );
};


export default TodoCreator;
