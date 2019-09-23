import * as actions from './types';

export const addTodo = (text, color, fulfilled = false) => {
    return {
        type: actions.ADD_TODO,
        payload: {text, color, fulfilled}
    }
};

export const setColor = (payload) => {
    return {
        type: actions.SET_COLOR,
        payload
    }
};

export const removeTodo = (index) => {
    return {
        type: actions.REMOVE_TODO,
        payload: {index}
    }
};
