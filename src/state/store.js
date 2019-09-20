import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import todosReducer from "./todos";

const rootReducer = combineReducers({
    todos: todosReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(createSagaMiddleware()))
);

export default store;