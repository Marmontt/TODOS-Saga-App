import {testSaga} from 'redux-saga-test-plan';

import * as saga from './sagas';
import * as todoActions from './action';
import {ADD_TODO_SUCCESS, GET_TODOS_SUCCESS, SET_FULFILLED_SUCCESS} from "./types";

describe('sagas', () => {
    it('getTodos', () => {
        testSaga(saga.getTodos).next()
            .next({type: GET_TODOS_SUCCESS})
            .next()
            .isDone();
    });
    it('addTodo', () => {
        const action = {type: ADD_TODO_SUCCESS, payload: {}};
        testSaga(saga.addTodo, action.payload)
            .next()
            .next({type: GET_TODOS_SUCCESS})
            .next()
            .isDone();
    });
    it('setFulfilledState', () => {
        const action = {type: SET_FULFILLED_SUCCESS, payload: {}};
        testSaga(saga.setFulfilledState, action.payload)
            .next()
            .next({SET_FULFILLED_SUCCESS})
            .next()
            .isDone();
    });
});
