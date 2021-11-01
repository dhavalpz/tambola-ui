import React from "react";
import Board from "../Board";
import { render } from "@testing-library/react";

describe("Board", () => {
  it("should render board with _", () => {
    const tree = render(<Board />);

    expect(tree).toMatchSnapshot();
  });
});
