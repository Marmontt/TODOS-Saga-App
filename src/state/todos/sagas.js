import {put, takeEvery, delay} from 'redux-saga/effects'
import * as todoActions from './types'

export function* addTodo(action) {
    yield delay(1000);
    yield put({
        type: todoActions.ADD_TODO_SUCCESS,
        payload: {
            text: action.payload.text === '' ? 'TODO without text' : action.payload.text,
            color: action.payload.color,
            fulfilled: action.payload.fulfilled
        }
    });
}

export function* removeTodo(action) {
    yield delay(1000);
    yield put({
        type: todoActions.REMOVE_TODO_SUCCESS,
        payload: {
            index: action.payload.index
        }
    })
}

export default function* todoSaga() {
    yield takeEvery(todoActions.ADD_TODO, addTodo);
    yield takeEvery(todoActions.REMOVE_TODO, removeTodo);
}