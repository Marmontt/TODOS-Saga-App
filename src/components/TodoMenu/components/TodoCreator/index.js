import React from 'react';
import './index.css';

const TodoCreator = ({color, text}) => {
    return (
        <div style={{background: color}} className={'todoCreator-container'}>
            <input className={'todoCreator-checkbox'} type="checkbox"/>
            <div className={'todoCreator-text'}>{text}</div>
        </div>
    );
};

export default TodoCreator;