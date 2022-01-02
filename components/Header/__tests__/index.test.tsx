/**
 * @jest-environment jsdom
 */
import Header, { HeaderLink } from "..";
import {
  getAllByRole,
  getByRole,
  render,
  screen,
} from "@testing-library/react";

describe(Header, () => {
  it("renders a top-level banner element", () => {
    render(<Header />);

    const banner = screen.getByRole("banner");

    expect(banner).toBeInTheDocument();
  });

  it("contains the logo", () => {
    render(<Header />);

    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  it("does not render a navigation landmark if no links are provided", () => {
    const { container, rerender } = render(<Header />);

    let banner = getByRole(container, "banner");

    expect(() => getByRole(banner, "navigation")).toThrow();
    // should also fail with an empty array
    rerender(<Header links={[]} />);

    banner = getByRole(container, "banner");
    expect(() => getByRole(banner, "navigation")).toThrow();
  });

  it("renders a navigation landmark in the banner when links are provided", () => {
    const { container } = render(
      <Header links={[{ href: "/boogalooga", text: "Wazooooo" }]} />
    );

    const banner = getByRole(container, "banner");
    const nav = getByRole(banner, "navigation");

    expect(banner).toContainElement(nav);
  });

  it("renders a provided list of links in the navigation", () => {
    const links: HeaderLink[] = [
      {
        href: "/#town",
        text: "OwO",
      },
      {
        href: "https://vtt.benlittleton.ca",
        text: "Donjons et Dragoooones",
      },
    ];
    const { container } = render(<Header links={links} />);

    const nav = getByRole(container, "navigation");
    const list = getByRole(nav, "list");
    const listItems = getAllByRole(list, "listitem");

    expect(list).toBeInTheDocument();
    listItems.forEach((li, i) => {
      const a = getByRole(li, "link");

      expect(list).toContainElement(li);
      expect(li).toContainElement(a);
      expect(a.textContent).toBe(links[i].text);
      expect(a.getAttribute("href")).toBe(links[i].href);
    });
  });
});
