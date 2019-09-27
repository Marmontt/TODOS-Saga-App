import React from "react";
import { shallow } from "enzyme";

import HomePage from "./index";

describe("Home page", () => {
  it("should render properly", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
