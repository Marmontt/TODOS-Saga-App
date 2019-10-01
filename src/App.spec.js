import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import {shallow, configure} from "enzyme";

import App from './App';
import * as ReactReduxHooks from './react-redux-hooks';
import {GET_TODOS_REQUEST} from "./state/todos/types";

configure({adapter: new Adapter()});

describe('App', () => {
    let wrapper;
    let useEffect;
    let store;

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };

    beforeEach(() => {
        store = configureStore([createSagaMiddleware()]) ({
            todos: [{color: '#fff', text: 'raq', fulfilled: false, index: 0}],
            selectedColor: '#fff',
        });

    useEffect = jest.spyOn(React , 'useEffect');
    mockUseEffect();

    jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);

    wrapper = shallow(<App store={store}/>);
    });

    it('should render properly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should dispatch getTodos', () => {
        const actions = store.getActions();
        expect(actions).toEqual([{type: GET_TODOS_REQUEST}])
    });
});
