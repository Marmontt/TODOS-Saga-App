export const getTodos = (state, fulfilled = false) => {
    if (!fulfilled) {
        return state.todos.todos.filter(todo => todo.fulfilled === false)
    } else {
        return state.todos.todos
    }
};
