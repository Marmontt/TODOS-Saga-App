import React from "react";
import {shallow} from "enzyme";

import {TodoMenu} from "./index";

jest.mock('react-redux', () => ({
    useDispatch: () => {
    },
}));

describe("TodoMenu", () => {
    it("should render properly", () => {
        const wrapper = shallow(<TodoMenu/>,);
        expect(wrapper).toMatchSnapshot();
    });
    it('should respond to input', () => {
        const wrapper = shallow(<TodoMenu/>);
        wrapper.find('input').simulate('change', {target: {value: 'raq'}});
        expect(wrapper.find('input')).toHaveValue('raq');
    });
    it('should clear text field on click', () => {
        const wrapper = shallow(<TodoMenu/>,);
        wrapper.find('input').simulate('change', {target: {value: 'raq'}});
        wrapper.find('input').simulate('click');
        expect(wrapper.find('input')).toHaveValue('');
    });
    // TypeError: dispatch is not a function
    it('should respond to button click', () => {
        const wrapper = shallow(<TodoMenu/>,);
        wrapper.find('button').simulate('click');
    });
});
