import * as types from './types';

const initialState = {
    showFulfilledTodos: false,
    chosenColor: '#eb716a',
    todos: []
};

const todosReducer = (state = initialState, action) => {
    let todos;
    switch (action.type) {
        case types.ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.payload.text,
                        color: action.payload.color,
                        fulfilled: action.payload.fulfilled
                    }
                ]
            };
        case types.REMOVE_TODO_SUCCESS:
            todos = state.todos.slice();
            return {
                ...state,
                todos: todos.filter(todo => todo.fulfilled === false)
            };
        case types.SET_FULFILLED_SUCCESS:
            todos = state.todos.slice();
            todos[action.payload.index].fulfilled = action.payload.fulfilled;
            return {
                ...state,
                todos: todos
            };
        default:
            return state;
    }
};

export default todosReducer;