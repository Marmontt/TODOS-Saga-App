import reducer from '../todos/reducer'
import * as types from './types'

describe('todos reducer', () => {
    const initial_state = {
        chosenColor: '#eb716a',
        todos: []
    };

    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual(initial_state)
    });
    it('should handle GET_TODOS_SUCCESS', () => {
        const todos = {color: '#fff', text: 'raq', fulfilled: false, index: 0};
        expect(reducer([], {
            type: types.GET_TODOS_SUCCESS,
            payload: todos
        })).toEqual({todos});
        expect(reducer(initial_state, {type: types.GET_TODOS_SUCCESS, payload: todos})).toEqual({
            ...initial_state,
            todos: todos
        })
    });
});
