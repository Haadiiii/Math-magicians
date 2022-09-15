import React from "react";
import Button from "../Button";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("render Without crashing", () => {
  render(<Button name="me" />);
});

it("matches snapshot for button", () => {
  const tree = renderer.create(<Button name="me"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
