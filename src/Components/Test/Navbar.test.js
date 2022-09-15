import React from "react";
import Navbar from "../Test/__mock__/Navbar";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("render Without crashing", () => {
  render(<Navbar />);
});

it("matches snapshot for Navbar", () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
