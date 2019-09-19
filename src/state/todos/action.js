import * as actions from './types';

export const addTodo = (todo) => {
    return {
        type: actions.ADD_TODO,
        payload: todo
    }
};

export const getTodos = () => {
    return {
        type: actions.GET_TODOS
    }
};