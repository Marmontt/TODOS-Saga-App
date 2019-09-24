import {put, takeEvery, delay} from 'redux-saga/effects'
import axios from 'axios';
import * as todoTypes from './types'
import * as todoActions from './action';

export function* getTodos() {
    const {data} = yield axios.get('http://localhost:4000/api/todos');
    yield put(todoActions.setTodos(data))
}

export function* addTodo(action) {
    const {data} = yield axios.post('http://localhost:4000/api/todos', action.payload);
    yield put({
        type: todoTypes.ADD_TODO_SUCCESS,
        payload: data
    });
}

function* setFulfilledState(action) {
    yield delay(500);
    yield put({
        type: todoTypes.SET_FULFILLED_SUCCESS,
        payload: {
            index: action.payload.index,
            fulfilled: action.payload.fulfilled
        }
    })
}

export default function* todoSaga() {
    yield takeEvery(todoTypes.GET_TODOS_REQUEST, getTodos)
    yield takeEvery(todoTypes.ADD_TODO, addTodo);
    yield takeEvery(todoTypes.SET_FULFILLED_STATE, setFulfilledState);
}
