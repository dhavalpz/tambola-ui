import React from "react";
import { Header } from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeContext } from "../../ThemeContext";

describe("Header", () => {
  it("Header Match snapshot test", () => {
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
    expect(setThemeName).toHaveBeenCalledWith("lightTheme");
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
    expect(setThemeName).toHaveBeenCalledWith("darkTheme");
  });
});
