import { render } from "@testing-library/react";
import { ErrorAnimation } from "./ErrorAnimation";

describe("ErrorAnimation", () => {
  it.each`
    animation
    ${"404"}
    ${"unknown"}
  `(`Should render animation as svg`, ({ animation }) => {
    const { getByTestId } = render(<ErrorAnimation error={animation} />);
    const animationContainer = getByTestId(`lottieAnimation-${animation}`);
    expect(animationContainer).toBeInTheDocument();
    expect(animationContainer.children[0].children[0].tagName).toBe("svg");
  });

  it("Should render given children", () => {
    const { getByText } = render(
      <ErrorAnimation error="404">
        <p>Error message</p>
      </ErrorAnimation>
    );

    expect(getByText("Error message")).toBeInTheDocument();
  });
});
