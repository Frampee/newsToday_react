import React from "react";
import { shallow } from "enzyme";
import List_news from "./List_news";

describe("List_news", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<List_news />);
    expect(wrapper).toMatchSnapshot();
  });
});
