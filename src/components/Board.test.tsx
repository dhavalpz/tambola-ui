import React from "react";
import Board from "./Board";
import { render } from "@testing-library/react";

describe("testing board", () => {
  it("should render", () => {
    const tree = render(<Board />);
    expect(tree).toMatchSnapshot();
  });
});
