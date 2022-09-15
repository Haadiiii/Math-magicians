import React from "react";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Navbar from "./__mock__/Navbar";

afterEach(cleanup);

it("render Without crashing", () => {
  render(<Navbar />);
});

it("matches snapshot for Navbar", () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
