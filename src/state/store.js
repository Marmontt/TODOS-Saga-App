import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import todosReducer from "./todos";

const rootReducer = combineReducers({
    todos: todosReducer
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(createSagaMiddleware()),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;