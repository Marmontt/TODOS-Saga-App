import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import TodoCreator from "./index";
import * as ReactReduxHooks from '../../../react-redux-hooks'
import {SET_FULFILLED_STATE} from "../../../state/todos/types";

configure({adapter: new Adapter()});

describe("TodoCreator", () => {
    let wrapper;
    let store;

    beforeEach(() => {
        const props = {
            color: "red",
            text: "some-test-text",
            fulfilled: false,
            todoIndex: 0,
            setFulfilledState: jest.fn()
        };
        store = configureStore([createSagaMiddleware()])({
            todos: [{color: '#fff', text: 'raq', fulfilled: false, index: 0}],
            selectedColor: '#fff',
        });

        jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);

        wrapper = shallow(<TodoCreator store={store} {...props}/>);
    });


    it("should render properly", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should respond to change', () => {
        const actions = store.getActions();
        wrapper.find('input').simulate('change');
        expect(actions).toEqual([{type: SET_FULFILLED_STATE, payload: {fulfilled: true, index: 0}}])
    });
});
