import React from "react";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Button from "../Button";

afterEach(cleanup);

it("render Without crashing", () => {
  render(<Button name="me" />);
});

it("matches snapshot for button", () => {
  const tree = renderer.create(<Button name="me" />).toJSON();
  expect(tree).toMatchSnapshot();
});
