import React from "react";
import { Header } from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeContext } from "../../ThemeSetter";

describe("testing Header", () => {
  it("should render Header", () => {
    const tree = render(<Header />);
    expect(tree).toMatchSnapshot();
  });

  it("should click on light theme button", () => {
    const setThemeName = jest.fn();
    render(
      <ThemeContext.Provider value={setThemeName}>
        <Header />
      </ThemeContext.Provider>
    );
    fireEvent.click(screen.getByTestId("lightButton"));
    expect(setThemeName).toHaveBeenCalled();
  });

  it("should click on dark theme button", () => {
    const setThemeName = jest.fn();
    render(
      <ThemeContext.Provider value={setThemeName}>
        <Header />
      </ThemeContext.Provider>
    );
    fireEvent.click(screen.getByTestId("darkButton"));
    expect(setThemeName).toHaveBeenCalled();
  });
});
