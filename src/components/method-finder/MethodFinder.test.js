import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MethodFinder from "./MethodFinder";

const mockedSetMethod = jest.fn();

describe("MethodFinder component", () => {
  test("should correctly set default option", () => {
    render(<MethodFinder />);
    const optionElement = screen.getByRole("option", {name: "options"});
    expect(optionElement.selected).toBe(true);
  });

  test("should display correct number of options", () => {
    render(<MethodFinder />);
    const optionElements = screen.getAllByRole("option");
    expect(optionElements.length).toBe(8);
  });

  test("should allow user to change method types", () => {
    render(<MethodFinder setMethod={mockedSetMethod} />);
    const selectElement = screen.getByRole("combobox");
    const optionElement = screen.getByRole("option", {name: "return a string"});

    userEvent.selectOptions(selectElement, optionElement);

    expect(optionElement.selected).toBe(true);
  });

  // test("should be able to change values", () => {
  //   render(<MethodFinder setMethod={mockedSetMethod} />);
  //   const optionElement = screen.getByRole("option", {name: "return a string"});
  //   userEvent.selectOptions(optionElement, {target: {value: "returnString"}});
  //   expect(optionElement.value).toBe("returnString");
  // });
});
