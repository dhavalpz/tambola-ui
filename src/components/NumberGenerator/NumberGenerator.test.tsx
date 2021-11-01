import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NumberGenerator from "./NumberGenerator";

jest.mock("lodash", () => {
  return {
    random: () => {
      return 75;
    },
  };
});

describe("NumberGenerator", () => {
  it("should render correctly", () => {
    const tree = render(<NumberGenerator />);

    expect(tree).toMatchSnapshot();
  });
  it("should zero be the initial value of current number", () => {
    render(<NumberGenerator />);

    const number = screen.getByTestId("currentNo");

    expect(number).toHaveTextContent("0");
  });
  it("should zero be the initial value of previous number", () => {
    render(<NumberGenerator />);

    const value = screen.getByTestId("previousNo");

    expect(value).toHaveTextContent("0");
  });
  it("should button name showing as per requirement or not", () => {
    render(<NumberGenerator />);

    const btn = screen.getByTestId("btn");

    expect(btn).toHaveTextContent("Generate Number");
  });
  it("should generate number on button triggering", () => {
    const { getByTestId } = render(<NumberGenerator />);

    fireEvent.click(getByTestId("btn"));

    expect(getByTestId("currentNo").innerHTML).toBe("75");
  });
});
