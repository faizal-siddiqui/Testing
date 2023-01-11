import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import TopicInput from "./TopicInput";
import { TopicType } from "../constants";

it("should render", () => {
  render(<TopicInput type={TopicType.Pending} onCancel={() => {}} />);

  expect(screen.getByTestId("input-topic")).toBeInTheDocument();
  expect(screen.getByTestId("save-topic-btn")).toBeInTheDocument();
  expect(screen.getByTestId("cancel-add-topic-btn")).toBeInTheDocument();
});

it("should type input in input Box", () => {
  render(<TopicInput type={TopicType.New} onCancel={() => {}} />);
  const inputElem = screen.getByTestId("input-topic");
  fireEvent.change(inputElem, { target: { value: "First Topic" } });
  expect(inputElem.value).toBe("First Topic");
});
