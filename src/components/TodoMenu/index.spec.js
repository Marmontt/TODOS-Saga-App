import React from "react";
import { shallow } from "enzyme";

import TodoMenu from "./index";

describe("TodoMenu", () => {
  it("should render properly", () => {
    const wrapper = shallow(<TodoMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
