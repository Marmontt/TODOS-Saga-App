import React from "react";
import {shallow} from "enzyme";

import {TodoList} from "../TodoList";
import {getTodos} from '../../state/selectors';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn()),
}));
jest.mock('../../state/selectors');

describe("TodoList", () => {
    it("should render properly", () => {
        getTodos.mockReturnValue([{text: 'asdasd', color: '#fff', fulfilled: false, id: 1}]);
        const wrapper = shallow(<TodoList/>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should respond to toggle change", () => {
        const wrapper = shallow(<TodoList/>);
        wrapper.find("input").simulate("change", {target: true});
        expect(wrapper.find("input")).toHaveProp({checked: true});
    });
});
