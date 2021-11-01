import React from "react";
import { Header } from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeContext } from "../../ThemeContext";

enum Theme {
  lightTheme = "lightTheme",
  darkTheme = "darkTheme",
}

describe("Header", () => {
  it("Header render correctly ", () => {
    const tree = render(<Header />);

    expect(tree).toMatchSnapshot();
  });

  it("should get light theme ", () => {
    const setThemeName = jest.fn();

    render(
      <ThemeContext.Provider value={setThemeName}>
        <Header />
      </ThemeContext.Provider>
    );

    fireEvent.click(screen.getByTestId("lightButton"));

    expect(setThemeName).toHaveBeenCalledTimes(1);
    expect(setThemeName).toHaveBeenCalledWith(Theme.lightTheme);
  });

  it("should get dark theme ", () => {
    const setThemeName = jest.fn();

    render(
      <ThemeContext.Provider value={setThemeName}>
        <Header />
      </ThemeContext.Provider>
    );

    fireEvent.click(screen.getByTestId("darkButton"));

    expect(setThemeName).toHaveBeenCalledTimes(1);
    expect(setThemeName).toHaveBeenCalledWith(Theme.darkTheme);
  });
});
