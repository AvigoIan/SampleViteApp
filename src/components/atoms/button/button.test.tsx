import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./button";

describe("Button Component", () => {
  test("renders button with given label", () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = vi.fn(); // Use vi.fn() instead of jest.fn()
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByText("Click Me");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("displays correct label text", () => {
    render(<Button label="Submit" />);
    const buttonElement = screen.getByText("Submit");
    expect(buttonElement.textContent).toBe("Submit");
  });
});
