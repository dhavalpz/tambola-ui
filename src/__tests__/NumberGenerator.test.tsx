import React from "react";
import { render, screen } from "@testing-library/react";
import NumberGenerator from "../components/NumberGenerator";

describe("NumberGenerator ", () => {
  it("should render text 'Current Number' ", () => {
    render(<NumberGenerator />);
    const text = screen.getByText(/Current Number/i);
    expect(text).toBeInTheDocument();
  });
  it("should zero be the initial value of current number", () => {
    render(<NumberGenerator />);
    const number = screen.getByTestId(/currentNo/i);
    expect(number).toHaveTextContent("0");
  });
});
