import React from 'react';
import {shallow} from 'enzyme';

import App from "../App";
import TodoList from "../components/TodoList";
import TodoMenu from "../components/TodoMenu";

describe('App', () => {
    it('should render exact matching components', () => {
        const component = shallow(<App/>);
        expect(component).toContainExactlyOneMatchingElement(TodoList);
        expect(component).toContainExactlyOneMatchingElement(TodoMenu);
    });
});
