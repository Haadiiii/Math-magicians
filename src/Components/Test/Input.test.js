import React from "react";
import Input from "../Input";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("render Without crashing", () => {
  render(<Input />);
});

it("matches snapshot for Input", () => {
  const tree = renderer.create(<Input></Input>).toJSON();
  expect(tree).toMatchSnapshot();
});