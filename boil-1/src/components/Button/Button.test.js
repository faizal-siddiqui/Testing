import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Button from "./Button";

afterEach(() => {
  cleanup();
});

it("should render button component", () => {
  render(<Button label={"Hello World"} />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});

it("should render button with label", () => {
  let label = "Hello World";
  render(<Button label={label} />);
  expect(screen.getByTestId("button")).toBeInTheDocument();
  expect(screen.getByTestId("button")).toHaveTextContent(label);
});

it("should execute onClick function when clicked", () => {
  const fn = jest.fn(); // mock function provided by jest
  render(<Button label="Hello" onClick={fn} />);
  const button = screen.getByTestId("button");
  fireEvent.click(button);
  expect(fn).toBeCalled();
});
