import { act, render, waitFor } from "@testing-library/react";
import { SplashScreen } from "./SplashScreen";

describe("SplashScreen", () => {
  it("Should render when isVisible is true", async () => {
    const { queryByTestId } = render(<SplashScreen isVisible={true} />);

    const splashScreen = await waitFor(() => queryByTestId("splashScreen"));

    expect(splashScreen).toBeInTheDocument();
  });

  it("Should remove itself from the DOM after transitionTimeInSeconds when isVisible is false", async () => {
    jest.useFakeTimers();

    const { queryByTestId } = render(
      <SplashScreen isVisible={false} transitionTimeInSeconds={3} />
    );

    expect(queryByTestId("splashScreen")).toBeInTheDocument();

    await act(async () => {
      jest.advanceTimersByTime(3500);
    });

    await waitFor(() => {
      expect(queryByTestId("splashScreen")).not.toBeInTheDocument();
    });
  });
});
