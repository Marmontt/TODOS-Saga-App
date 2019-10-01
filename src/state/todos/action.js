import * as actions from './types';

export const addTodo = (text, color, fulfilled = false) => {
    return {
        type: actions.ADD_TODO,
        payload: {text, color, fulfilled}
    }
};

export const getTodosRequest = () => {
    return {
        type: actions.GET_TODOS_REQUEST
    }
};

export const getTodosSuccess = (todos) => {
    return {
        type: actions.GET_TODOS_SUCCESS,
        payload: todos
    }
};


export const setFulfilledState = (index, fulfilled) => {
    return {
        type: actions.SET_FULFILLED_STATE,
        payload: {index, fulfilled}
    }
};
