import React from "react";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Calculator from "../Calculator";

afterEach(cleanup);

it("render Without crashing", () => {
  render(<Calculator />);
});

it("matches snapshot for button", () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
