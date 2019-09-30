import React from "react";
import {shallow} from "enzyme";

import TodoCreator from "./index";

jest.mock('react-redux', () => ({
    useDispatch: () => {
    },
}));

describe("TodoCreator", () => {
    const props = {
        color: "red",
        text: "some-test-text",
        fulfilled: false,
        todoIndex: 0,
    };


    it("should render properly", () => {
        const wrapper = shallow(<TodoCreator {...props} />,);
        expect(wrapper).toMatchSnapshot();
    });
    // TypeError: dispatch is not a function
    it('should respond to change', () => {
        const wrapper = shallow(<TodoCreator {...props} />,);
        wrapper.find('input').simulate('change', {target: {checked: true}});
        expect(wrapper.find('input')).toHaveProp({checked: true})
    });
});
