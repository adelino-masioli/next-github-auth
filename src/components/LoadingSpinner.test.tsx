import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LoadingSpinner } from "./LoadingSpinner";

describe("LoadingSpinner", () => {
  it("renders with default props", () => {
    render(<LoadingSpinner />);

    const spinner = screen.getByRole("status");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass("w-10 h-10"); // medium size

    const message = screen.getByText("Loading...");
    expect(message).toBeInTheDocument();
  });

  it("renders with custom size", () => {
    render(<LoadingSpinner size="large" />);

    const spinner = screen.getByRole("status");
    expect(spinner).toHaveClass("w-16 h-16");
  });

  it("renders with custom message", () => {
    const customMessage = "Please wait...";
    render(<LoadingSpinner message={customMessage} />);

    const message = screen.getByText(customMessage);
    expect(message).toBeInTheDocument();
  });

  it("does not render message when not provided", () => {
    render(<LoadingSpinner message="" />);

    const message = screen.queryByText("Loading...");
    expect(message).not.toBeInTheDocument();
  });

  it("applies correct classes for small size", () => {
    render(<LoadingSpinner size="small" />);

    const spinner = screen.getByRole("status");
    expect(spinner).toHaveClass("w-6 h-6");
  });

  it("applies animation and border classes", () => {
    render(<LoadingSpinner />);

    const spinner = screen.getByRole("status");
    expect(spinner).toHaveClass(
      "animate-spin",
      "rounded-full",
      "border-t-4",
      "border-blue-500",
      "border-opacity-50"
    );
  });
});
