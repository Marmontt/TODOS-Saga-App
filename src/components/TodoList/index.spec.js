import React from "react";
import { shallow } from "enzyme";

import TodoList from "./index";

describe("TodoList", () => {
  it("should render properly", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should respond to toggle change", () => {
    const wrapper = shallow(<TodoList />);
    wrapper.find("input").simulate("change", { target: true });
    expect(wrapper.find("input")).toHaveProp({ checked: true });
  });
});
