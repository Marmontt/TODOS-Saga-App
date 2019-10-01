import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import {shallow, configure} from "enzyme";

import TodoMenu from "./index";
import * as ReactReduxHooks from '../../react-redux-hooks';
import {ADD_TODO} from "../../state/todos/types";

configure({adapter: new Adapter()});

describe("TodoMenu", () => {
    let wrapper;
    let store;

    beforeEach(() => {
        store = configureStore([createSagaMiddleware()])({
            todos: []
        });

        jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);

        wrapper = shallow(<TodoMenu store={store}/>);
    });

    it("should render properly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should respond to input', () => {
        wrapper.find('input').simulate('change', {target: {value: 'raq'}});
        expect(wrapper.find('input')).toHaveValue('raq');
    });
    it('should clear text field on click', () => {
        wrapper.find('input').simulate('change', {target: {value: 'raq'}});
        wrapper.find('input').simulate('click');
        expect(wrapper.find('input')).toHaveValue('');
    });
    it('should respond to button click', () => {
        const actions = store.getActions();
        wrapper.find('button').simulate('click');
        expect(actions).toEqual([{
            type: ADD_TODO, payload: {color: "#eb716a", fulfilled: false, text: ""}
        }])
    });
});
