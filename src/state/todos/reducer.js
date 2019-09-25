import * as types from './types';

const initialState = {
    chosenColor: '#eb716a',
    todos: []
};

const todosReducer = (state = initialState, action) => {
    let todos;
    switch (action.type) {
        case types.GET_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload
            };
        case types.ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.payload.text,
                        color: action.payload.color,
                        fulfilled: action.payload.fulfilled,
                        id: action.payload.id
                    }
                ]
            };
        case types.SET_FULFILLED_SUCCESS:
            todos = state.todos.slice();
            todos.find(({id}) => id === action.payload.index).fulfilled = action.payload.fulfilled;
            return {
                ...state,
                todos: todos
            };
        default:
            return state;
    }
};

export default todosReducer;
