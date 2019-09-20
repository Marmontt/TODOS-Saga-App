import React, {useState} from 'react';
import './index.css'

const TodoColorBox = ({color}) => {
    const [chosenColor, setColor] = useState('');
    return (
        <div
            style={{backgroundColor: color}}
            className={'box'}
            onClick={()=>setColor(color)}>

        </div>
    );
};

export default TodoColorBox;
