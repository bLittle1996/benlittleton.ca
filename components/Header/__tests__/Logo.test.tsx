/**
 * @jest-environment jsdom
 */
import {
  getByLabelText,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import Logo from "../Logo";

describe(Logo, () => {
  it("contains only the initials BL", () => {
    const { container } = render(<Logo />);

    expect(getByText(container, "BL", { exact: true })).toBeInTheDocument();
  });

  it("has an accessible label 'Ben Littleton'", () => {
    const { container } = render(<Logo />);

    expect(
      getByLabelText(container, "Ben Littleton", { exact: true })
    ).toBeInTheDocument();
  });

  it("should be a level 1 heading", () => {
    render(<Logo />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
