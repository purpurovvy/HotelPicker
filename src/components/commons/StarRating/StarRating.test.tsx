import { render, screen } from "@testing-library/react";
import { StarRating } from "./StarRating";

describe("StarRating", () => {
  describe("when rendered with valid props", () => {
    it("should render the correct number of filled stars", () => {
      render(<StarRating filledStars={3} />);
      const filledStars = screen.getAllByTestId("filledStar");
      expect(filledStars).toHaveLength(3);
    });

    it("should render the correct number of outlined stars", () => {
      render(<StarRating filledStars={4} totalStars={10} />);
      const outlinedStars = screen.getAllByTestId("outlinedStar");
      expect(outlinedStars).toHaveLength(6);
    });
  });

  describe("when rendered with invalid props", () => {
    it("should throw an error when filledStars is negative", () => {
      expect(() => {
        render(<StarRating filledStars={-1} />);
      }).toThrowError(
        "filledStars must be a non-negative integer and no greater than totalStars"
      );
    });

    it("should throw an error when filledStars is greater than totalStars", () => {
      expect(() => {
        render(<StarRating filledStars={6} />);
      }).toThrowError(
        "filledStars must be a non-negative integer and no greater than totalStars"
      );
    });
  });
});
