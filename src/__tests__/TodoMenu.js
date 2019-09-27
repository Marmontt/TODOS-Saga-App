import React from 'react';
import {shallow} from 'enzyme'

import {TodoMenu} from '../components/TodoMenu';
import TodoColorBox from "../components/TodoMenu/components/TodoColorBox";
import * as todoActions from "../state/todos/action";

describe('Todo Menu', () => {
    it('renders',  () => {
        shallow(<TodoMenu/>)
    });
    const wrapper = shallow(<TodoMenu addTodo={todoActions.addTodo}/>);
    it('should render six TodoColorBox', () => {
        expect(wrapper).toContainMatchingElements(6, TodoColorBox);
    });
    it('should render button', () => {
        expect(wrapper).toContainExactlyOneMatchingElement('button')
    });
    it('input should have empty initial value', () => {
        expect(wrapper.find('input')).toHaveValue('')
    });
    it('input should have type = text', () => {
        expect(wrapper.find('input')).toHaveProp({type: 'text'})
    });
    it('input responds to text change', () => {
        wrapper.find('input').simulate('change', {target: 'asd'})
    });
    it('should be able to handle click', () => {
        const button = wrapper.find('button');
        button.simulate('click')
    });
});
