import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("Should render provided title and value correctly", () => {
    const { getByTestId } = render(
      <Counter title="Test" value={3} changeValue={() => {}} />
    );
    const counter = getByTestId("Test-counter");
    expect(counter).toHaveTextContent("Test:");
    expect(counter).toHaveTextContent("3");
  });

  it("increments the value when the increment button is clicked", () => {
    const changeValue = jest.fn();
    const { getByTestId } = render(
      <Counter title="Test" value={3} changeValue={changeValue} />
    );
    const incrementButton = getByTestId("counter-Test-incrementButton");
    fireEvent.click(incrementButton);
    expect(changeValue).toHaveBeenCalledTimes(1);

    const decrementButton = getByTestId("counter-Test-decrementButton");
    fireEvent.click(decrementButton);
    expect(changeValue).toHaveBeenCalledTimes(2);
  });
});
