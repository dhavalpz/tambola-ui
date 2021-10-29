import React from "react";
import { render, screen } from "@testing-library/react";
import NumberGenerator from "./components/NumberGenerator";

it("should text render", () => {
  render(<NumberGenerator />);
  const text = screen.getByText(/Current Number/i);
  expect(text).toBeInTheDocument();
});
it("should number render",()=>{
  render(<NumberGenerator/>);
  const number=screen.queryByTestId(/currentNo/i);
  expect(number).toBeTruthy();
});
