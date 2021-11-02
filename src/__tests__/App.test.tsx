import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { ThemeProvider } from "../components/ThemeContext";

describe("App", () => {
  it("App Match Snapshot ", () => {
    const tree = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );

    expect(tree).toMatchSnapshot();
  });
});
