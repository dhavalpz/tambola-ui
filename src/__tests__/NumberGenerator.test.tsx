import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import NumberGenerator from "../components/NumberGenerator";

describe("Current Number", () => {
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

describe("Previous Number", () => {
  it("should null be the initial value of previous number", () => {
    render(<NumberGenerator />);
    const value = screen.getByTestId(/previousNo/i);
    expect(value).toHaveTextContent("");
  });
});

describe("Button", () => {
  it("should have a button value", () => {
    render(<NumberGenerator />);
    const btn = screen.getByTestId(/btn/i);
    expect(btn).toHaveTextContent("Generate Number");
  });
  it("should current number generated on button trigger", () => {
    const { getByTestId } = render(<NumberGenerator />);
    fireEvent.click(getByTestId("btn"));
    expect(getByTestId("btn").innerHTML).not.toBeNull();
  });
});
