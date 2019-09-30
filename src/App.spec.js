import React from 'react';
import {shallow} from "enzyme";

import App from './App';
import {todosActions} from './state/todos'

jest.mock('react-redux', () => ({
    useDispatch: () => {
    },
}));


describe('App', () => {
    it('should render properly', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should dispatch getTodos', () => {
        const wrapper = shallow(<App/>);

    });
});
