import React from "react";
import { shallow } from "enzyme";

import { TodoColorBox } from "./index";

const props = {
  chosenColor: "red",
  color: "yellow",
  setColor: jest.fn()
};

describe("TodoColorBox", () => {
  it("should render properly", () => {
    const wrapper = shallow(<TodoColorBox {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("should change color", () => {
    const wrapper = shallow(<TodoColorBox {...props} />);
    wrapper.simulate("click");
    expect(props.setColor).toBeCalledWith("yellow");
  });
});
