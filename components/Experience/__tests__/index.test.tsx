/**
 * @jest-environment jsdom
 */
import { getByRole, render, screen } from "@testing-library/react";
import Experience, { ExperienceProps, Tech } from "..";
import { NonEmptyArray } from "../../../utils/types";
import img from "../__mocks__/image.png";

describe(Experience, () => {
  const experienceProps: Required<ExperienceProps> = {
    image: img,
    imageAlt: "ooga booga",
    projectLink: "https://benlittleton.ca",
    title: "Super Awesome Thing",
    techUsed: [
      {
        name: "TypeScript",
        link: "https://typescriptlang.org",
      },
      {
        name: "SASS",
        link: "https://sass-lang.com",
      },
    ],
  };

  it("Renders the image with the correct alt text", () => {
    const { rerender } = render(<Experience {...experienceProps} />);

    expect(screen.getByAltText(experienceProps.imageAlt)).toBeInTheDocument();
    rerender(<Experience {...{ ...experienceProps, imageAlt: undefined }} />);
    expect(screen.getByAltText(experienceProps.title)).toBeInTheDocument();
  });

  it("renders a heading that links to the project", () => {
    render(<Experience {...experienceProps} />);

    const heading = screen.getByRole("heading");
    const link = getByRole(heading, "link");

    expect(link.getAttribute("href")).toBe(experienceProps.projectLink);
    expect(heading.textContent).toBe(experienceProps.title);
  });

  it("displays the technogies used as links", () => {
    const techUsedA = experienceProps.techUsed.slice(
      0,
      1
    ) as NonEmptyArray<Tech>;
    const techUsedB = [
      ...experienceProps.techUsed,
      { name: "NextJS", link: "https://benlittleton.ca" },
    ] as NonEmptyArray<Tech>;
    const { rerender } = render(<Experience {...experienceProps} />);

    expect(screen.getByText("Technologies Used:")).toBeInTheDocument();

    // all we care about is if our tech items are being turned into links.
    const expectations = (tech: Tech[]) => {
      const links = screen.getAllByRole("link");
      tech.forEach((t) => {
        expect(
          links.some(
            (link) =>
              link.getAttribute("href") === t.link &&
              link.textContent === t.name
          )
        ).toBe(true);
      });
    };

    expectations(experienceProps.techUsed);
    rerender(<Experience {...{ ...experienceProps, techUsed: techUsedA }} />);
    expectations(techUsedA);
    rerender(<Experience {...{ ...experienceProps, techUsed: techUsedB }} />);
    expectations(techUsedB);
  });

  it("Renders passed in children", () => {
    const { rerender } = render(
      <Experience {...experienceProps}>
        <p>Hello I am here now too have some fun!</p>
      </Experience>
    );
    expect(
      screen.getByText("Hello I am here now too have some fun!")
    ).toBeInTheDocument();
    expect(() => screen.getByText("I am the list item now.")).toThrow();
    rerender(
      <Experience {...experienceProps}>
        <ul>
          <li>I am the list item now.</li>
        </ul>
      </Experience>
    );
    expect(() =>
      screen.getByText("Hello I am here now too have some fun!")
    ).toThrow();
    expect(screen.getByText("I am the list item now.")).toBeInTheDocument();
  });
});
