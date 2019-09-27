import React from 'react';
import {shallow} from 'enzyme'

import TodoList from "../components/TodoList";


describe('Todo List', () => {
    const wrapper = shallow(<TodoList/>);
    it('should contain matching elements', () => {
        expect(wrapper).toContainExactlyOneMatchingElement('input');
        expect(wrapper).toContainMatchingElements(3, 'span')
    });
    it('should respond to toggle change', () => {
        wrapper.find('input').simulate('change', {target: true});
        expect(wrapper.find('input')).toHaveProp({checked: true})
    });
});
