import React from "react";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Input from "../Input";

afterEach(cleanup);

it("render Without crashing", () => {
  render(<Input />);
});

it("matches snapshot for Input", () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
