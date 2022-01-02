/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Link from "..";

describe(Link, () => {
  it("is a link", () => {
    render(<Link href="/" />);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("has the correct href", () => {
    const href = "/ungus-bungus";
    const hrefTwo = "/electric-boogaloo";
    const { rerender } = render(<Link href={href} />);

    expect(screen.getByRole("link").getAttribute("href")).toBe(href);
    rerender(<Link href={hrefTwo} />);
    expect(screen.getByRole("link").getAttribute("href")).toBe(hrefTwo);
  });

  it("renders the provided text", () => {
    const text = "awefeawf";
    const moreText = "opkrgiojgeraiojpwega";
    const { rerender } = render(<Link href="/">{text}</Link>);

    expect(screen.getByText(text, { exact: true })).toBeInTheDocument();
    rerender(<Link href="/">{moreText}</Link>);
    expect(screen.getByText(moreText, { exact: true })).toBeInTheDocument();
  });

  it("can override the className", () => {
    const classes = "mb-3 font-bold";
    render(<Link href="/" className={classes} overrideClassName />);

    expect(screen.getByRole("link").getAttribute("class")).toBe(classes);
  });
});
