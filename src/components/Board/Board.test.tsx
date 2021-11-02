import React from "react";
import Board from "./Board";
import { screen, render, act } from "@testing-library/react";
import { OnClickEvent } from "../../util/event/NumberGeneratorEvent";
import { publish } from "../../util/pubsub/PubSub";

describe("Board", () => {
  it("should render board with _", () => {
    const tree = render(<Board />);

    expect(tree).toMatchSnapshot();
  });

  it("should change cell value when new number is published", () => {
    const { getByTestId } = render(<Board />);

    act(() => {
      publish(new OnClickEvent(1));
    });

    expect(getByTestId("cell-0")).toHaveTextContent("1");
  });
});
