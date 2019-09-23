import React from 'react';
import './index.css'

const TodoColorBox = ({chosenColor, setColor, color}) => {
    return (
        <div
            style={chosenColor === color ? {backgroundColor: color, border: '2px solid #000'} : {backgroundColor: color}}
            className={'box'}
            onClick={() => setColor(color)}
        >
        </div>
    );
};

export default TodoColorBox;