import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Output from "./Output";

describe("Output component", () => {
  test("should render a heading", () => {
    render(<Output />);
    const headingElement = screen.getByRole("heading", {name: /output/i});
    expect(headingElement).toBeInTheDocument();
  });
});
