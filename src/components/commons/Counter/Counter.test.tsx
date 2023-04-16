import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
  const ParentMockWithCounter = () => {
    const [value, setValue] = React.useState(0);
    return <Counter title="Test" value={value} changeValue={setValue} />;
  };
  it("Should render provided title and value correctly", () => {
    const { getByTestId } = render(<ParentMockWithCounter />);
    const counter = getByTestId("Test-counter");
    expect(counter).toHaveTextContent("Test:");
    expect(counter).toHaveTextContent("0");
  });

  it("Should change the value given by parent on buttons click", () => {
    const { getByTestId } = render(<ParentMockWithCounter />);
    const incrementButton = getByTestId("counter-Test-incrementButton");
    const decrementButton = getByTestId("counter-Test-decrementButton");
    const counter = getByTestId("Test-counter");

    fireEvent.click(incrementButton);
    expect(counter).toHaveTextContent("1");
    expect(counter).not.toHaveTextContent("0");

    fireEvent.click(decrementButton);
    expect(counter).toHaveTextContent("0");
    expect(counter).not.toHaveTextContent("1");
  });
});
