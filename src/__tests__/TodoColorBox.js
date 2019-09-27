import React from 'react';
import {shallow} from 'enzyme'

import TodoColorBox from "../components/TodoMenu/components/TodoColorBox";

describe('Todo Color Box', () => {
    const wrapper = shallow(<TodoColorBox setColor={() => {
    }} color={'#fff'}/>);
    it('should be able to handle click', () => {
        wrapper.simulate('click')
    });
    it('should contain prop color', () => {
        expect(wrapper).toHaveProp({style: {backgroundColor: '#fff'}})
    });
});
