import React from 'react';
import {shallow} from 'enzyme'

import {TodoCreator} from '../components/TodoList/TodoCreator';
import * as todoActions from "../state/todos/action";

describe('Todo creator', () => {
    const props_default = {
        setFulfilledState: todoActions.setFulfilledState,
        color: '#fff',
        text: 'test',
        fulfilled: false,
        todoIndex: 1
    };
    const wrapper = shallow(<TodoCreator {...props_default}/>);
    it('should respond to checkbox change', () => {
        wrapper.find('input').simulate('change', {target: true})
    });
    it('should contain prop text', () => {
        expect(wrapper).toHaveText('test')
    });
    it('should contain prop color', () => {
        expect(wrapper).toHaveProp({style: {background: '#fff'}})
    });
    it('should contain prop fulfilled', () => {
        expect(wrapper.find('input')).toHaveProp({checked: false})
    });
    it('should appear line when fulfilled is true', () => {
        const newWrapper = shallow(<TodoCreator fulfilled={true}/>);
        expect(newWrapper).toContainExactlyOneMatchingElement('hr')
    });
});
