import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import {todosReducer} from "./todos";
import {todoSagas} from './todos'

const rootReducer = combineReducers({
    todos: todosReducer
});

const rootSaga = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(rootSaga))
);

rootSaga.run(todoSagas);

export default store;
