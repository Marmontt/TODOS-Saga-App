import * as actionTypes from './action'
import {ADD_TODO, GET_TODOS_REQUEST, GET_TODOS_SUCCESS} from "./types";

describe('actions', () => {
    it('addTodo ', () => {
        const payload = {
            text: 'asd',
            color: '#fff',
            fulfilled: false
        };
        const action = actionTypes.addTodo(payload.text, payload.color);
        expect(action).toEqual({
            type: ADD_TODO,
            payload
        })
    });
    it('getTodos',  () => {
        const action = actionTypes.getTodosRequest();
        expect(action).toEqual({
            type: GET_TODOS_REQUEST
        })
    });
    it('setTodos',  () => {
        const payload = [{
            color: '#fff',
            text: 'asdasd',
            fulfilled: false
        }];
        const action = actionTypes.getTodosSuccess(payload);
        expect(action).toEqual({
            type: GET_TODOS_SUCCESS,
            payload
        })
    });
});
