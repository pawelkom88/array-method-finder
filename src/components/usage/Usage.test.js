import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Usage from "./Usage";

describe("Usage component", () => {
  test("should render a heading", () => {
    render(<Usage />);
    const headingElement = screen.getByRole("heading", {name: /usage/i});
    expect(headingElement).toBeInTheDocument();
  });
});
