import * as types from './types';

const initialState = {
    todos: []
}
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default todosReducer;
