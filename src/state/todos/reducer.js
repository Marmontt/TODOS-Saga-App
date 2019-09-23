import * as types from './types';

const initialState = {
    chosenColor: '#eb716a',
    todos: []
};

const todosReducer = (state = initialState, action) => {
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
            let todos = state.todos.slice();
            return {
                ...state,
                todos: todos.filter(todo => todo.fulfilled === false)
            };
        default:
            return state;
    }
};

export default todosReducer;