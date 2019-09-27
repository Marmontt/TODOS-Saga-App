import React from "react";
import { shallow } from "enzyme";

import TodoColorBox from "./index";

describe("TodoColorBox", () => {
  it("should render properly", () => {
    const wrapper = shallow(<TodoColorBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
