import {put, takeEvery, delay} from 'redux-saga/effects'
import * as todoActions from './types'

export function* getTodos() {
    console.log('API CALL')
}

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

function* setFulfilledState(action) {
    yield delay(500);
    yield put({
        type: todoActions.SET_FULFILLED_SUCCESS,
        payload: {
            index: action.payload.index,
            fulfilled: action.payload.fulfilled
        }
    })
}

export default function* todoSaga() {
    yield takeEvery(todoActions.GET_TODOS_REQUEST, getTodos)
    yield takeEvery(todoActions.ADD_TODO, addTodo);
    yield takeEvery(todoActions.SET_FULFILLED_STATE, setFulfilledState);
}
