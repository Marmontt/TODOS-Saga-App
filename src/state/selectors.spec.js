import {getTodos} from './selectors'

describe('selectors', () => {
    it('getTodos', () => {
        const state = {
            todos: {
                todos: [
                    {
                        color: '#fff',
                        text: 'asd',
                        fulfilled: false
                    },
                    {
                        color: '#000',
                        text: 'raq',
                        fulfilled: true
                    }
                ]
            }
        };
        expect(getTodos(state, false)).toEqual(state.todos.todos.filter(todo => todo.fulfilled === false));
        expect(getTodos(state, true)).toEqual(state.todos.todos)
    });
});
