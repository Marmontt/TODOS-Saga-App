import reducer from '../todos/reducer'
import * as types from './types'

describe('todos reducer', () => {
    const initial_state = {
        chosenColor: '#eb716a',
        todos: []
    };

    it('should return initial state', () => {
        const state = reducer(undefined, {});
        expect(state).toMatchSnapshot();
    });
    it('should handle GET_TODOS_SUCCESS', () => {
        const todos = {color: '#fff', text: 'raq', fulfilled: false, index: 0};
        const getTodosSuccess = reducer({}, {type: types.GET_TODOS_SUCCESS, payload: todos});
        expect(getTodosSuccess).toMatchSnapshot();
    });
    it('should handle ADD_TODO_SUCCESS', () => {
        const todos = {text: 'raq', color: '#fff', id: 1, fulfilled: false};
        const addTodoSuccess = reducer(initial_state, {type: types.ADD_TODO_SUCCESS, payload: todos});
        expect(addTodoSuccess).toMatchSnapshot();
    });
    it('should handle SET_FULFILLED_SUCCESS', () => {
        const state = {
            chosenColor: '#eb716a',
            todos: [{text: 'raq', id: 0, color: '#fff', fulfilled: false}]
        };
        const fulfilled = true;
        const index = 0;
        const setFulfilledSuccess = reducer(state, {
            type: types.SET_FULFILLED_SUCCESS,
            payload: {index, fulfilled}
        });
        expect(setFulfilledSuccess).toMatchSnapshot();
    });
});
