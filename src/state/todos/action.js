import * as actions from './types';

export const addTodo = (text, color, fulfilled = false) => {
    return {
        type: actions.ADD_TODO,
        payload: {text, color, fulfilled}
    }
};

export const setFulfilledState = (index, fulfilled) => {
    return {
        type: actions.SET_FULFILLED_SUCCESS,
        payload: {index, fulfilled}
    }
};
