import React from "react";
import { shallow } from "enzyme";

import { TodoCreator } from "./index";

describe("TodoCreator", () => {
  const props = {
    color: "red",
    text: "some-test-text",
    fulfilled: false,
    todoIndex: 0,
    setFulfilledState: jest.fn()
  };

  it("should render properly", () => {
    const wrapper = shallow(<TodoCreator {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
