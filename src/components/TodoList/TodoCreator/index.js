import React from 'react';
import {connect} from 'react-redux';

import * as todoActions from "../../../state/todos/action";

import './index.css';


const TodoCreator = ({color, text, fulfilled, todoIndex, setFulfilledState}) => {

    return (
        <div style={{background: color}} className={'todoCreator-container'}>
            {fulfilled === true ?
                <hr className={'todoCreator-line'} color={'#000'}/>
                : <div/>}
            <div className={'todoCreator-content'}>
                <input onChange={() => {
                    setFulfilledState(todoIndex, !fulfilled);
                }} className={'todoCreator-checkbox'} checked={fulfilled} type="checkbox"/>
                <div className={'todoCreator-text'}>{`${todoIndex + 1}: ${text}`}</div>
            </div>
        </div>
    );
};

const mapActionsToProps = {
    setFulfilledState: todoActions.setFulfilledState
};

export default connect(null, mapActionsToProps)(TodoCreator);