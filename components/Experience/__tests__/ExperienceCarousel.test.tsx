/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent } from "@testing-library/react";
import Experience, { ExperienceProps } from "..";
import {
  generateTailwindCSS,
  injectCSSIntoContainer,
} from "../../../test-utils";
import ExperienceCarousel from "../ExperienceCarousel";
import fakeImg from "../__mocks__/image.png";

let twCss: string;
let styleObj: HTMLStyleElement;

beforeAll(async () => {
  twCss = await generateTailwindCSS();
  styleObj = injectCSSIntoContainer(document.body, twCss);
});

afterAll(() => {
  document.body.removeChild(styleObj);
});

describe(ExperienceCarousel, () => {
  it("Renders a single provided <Experience />", () => {
    const experienceProps: ExperienceProps = {
      title: "Test",
      image: fakeImg,
      projectLink: "https://benlittleton.ca",
      techUsed: [{ link: "https://benlittleton.ca", name: "Spiders" }],
    };

    render(
      <ExperienceCarousel>
        <Experience {...experienceProps} />
      </ExperienceCarousel>
    );

    expect(screen.getByText(experienceProps.title)).toBeInTheDocument(); // title
    expect(screen.getByAltText(experienceProps.title)).toBeInTheDocument(); // img
    expect(
      screen.getByText(experienceProps.techUsed[0].name)
    ).toBeInTheDocument(); // rendering our tech used...
  });

  it("can render multiple <Experience />", () => {
    const experiencePropsA: ExperienceProps = {
      title: "Test A",
      image: fakeImg,
      projectLink: "https://benlittleton.ca",
      techUsed: [{ link: "https://benlittleton.ca", name: "Spiders" }],
    };
    const experiencePropsB: ExperienceProps = {
      title: "Test B",
      image: fakeImg,
      projectLink: "https://google.ca",
      techUsed: [{ link: "https://google.ca", name: "AWEGH" }],
    };
    const experiencePropsC: ExperienceProps = {
      title: "Test C",
      image: fakeImg,
      projectLink: "https://nativshark.com",
      techUsed: [{ link: "https://nativshark.com", name: "aewijfoiawejfij" }],
    };

    const { container } = render(
      <ExperienceCarousel>
        <Experience {...experiencePropsA}></Experience>
        <Experience {...experiencePropsB}></Experience>
        <Experience {...experiencePropsC}></Experience>
      </ExperienceCarousel>
    );

    expect(screen.getByText("Test A")).toBeInTheDocument();
    expect(screen.getByText("Test B")).toBeInTheDocument();
    expect(screen.getByText("Test C")).toBeInTheDocument();
    // Only one should be visible at a time
    expect(screen.getByText("Test A")).toBeVisible();
    expect(screen.getByText("Test B")).not.toBeVisible();
    expect(screen.getByText("Test C")).not.toBeVisible();
  });

  it("shows some cool buttons that change which one is visible", () => {
    const experiencePropsA: ExperienceProps = {
      title: "Test A",
      image: fakeImg,
      projectLink: "https://benlittleton.ca",
      techUsed: [{ link: "https://benlittleton.ca", name: "Spiders" }],
    };
    const experiencePropsB: ExperienceProps = {
      title: "Test B",
      image: fakeImg,
      projectLink: "https://google.ca",
      techUsed: [{ link: "https://google.ca", name: "AWEGH" }],
    };
    const experiencePropsC: ExperienceProps = {
      title: "Test C",
      image: fakeImg,
      projectLink: "https://nativshark.com",
      techUsed: [{ link: "https://nativshark.com", name: "aewijfoiawejfij" }],
    };

    const { container } = render(
      <ExperienceCarousel>
        <Experience {...experiencePropsA}></Experience>
        <Experience {...experiencePropsB}></Experience>
        <Experience {...experiencePropsC}></Experience>
      </ExperienceCarousel>
    );

    expect(screen.getByText("Test A")).toBeInTheDocument();
    expect(screen.getByText("Test B")).toBeInTheDocument();
    expect(screen.getByText("Test C")).toBeInTheDocument();
    // Only one should be visible at a time
    expect(screen.getByText("Test A")).toBeVisible();
    expect(screen.getByText("Test B")).not.toBeVisible();
    expect(screen.getByText("Test C")).not.toBeVisible();

    fireEvent.click(
      screen.getByRole("button", { name: "View " + experiencePropsB.title })
    );

    expect(screen.getByText("Test A")).not.toBeVisible();
    expect(screen.getByText("Test B")).toBeVisible();
    expect(screen.getByText("Test C")).not.toBeVisible();

    fireEvent.click(
      screen.getByRole("button", { name: "View " + experiencePropsC.title })
    );

    expect(screen.getByText("Test A")).not.toBeVisible();
    expect(screen.getByText("Test B")).not.toBeVisible();
    expect(screen.getByText("Test C")).toBeVisible();

    fireEvent.click(
      screen.getByRole("button", { name: "View " + experiencePropsA.title })
    );

    expect(screen.getByText("Test A")).toBeVisible();
    expect(screen.getByText("Test B")).not.toBeVisible();
    expect(screen.getByText("Test C")).not.toBeVisible();
  });

  it("Shows only shows buttons to view other experiences", () => {
    const experiencePropsA: ExperienceProps = {
      title: "Test A",
      image: fakeImg,
      projectLink: "https://benlittleton.ca",
      techUsed: [{ link: "https://benlittleton.ca", name: "Spiders" }],
    };
    const experiencePropsB: ExperienceProps = {
      title: "Test B",
      image: fakeImg,
      projectLink: "https://google.ca",
      techUsed: [{ link: "https://google.ca", name: "AWEGH" }],
    };
    const experiencePropsC: ExperienceProps = {
      title: "Test C",
      image: fakeImg,
      projectLink: "https://nativshark.com",
      techUsed: [{ link: "https://nativshark.com", name: "aewijfoiawejfij" }],
    };
    const { container } = render(
      <ExperienceCarousel>
        <Experience {...experiencePropsA}></Experience>
        <Experience {...experiencePropsB}></Experience>
        <Experience {...experiencePropsC}></Experience>
      </ExperienceCarousel>
    );

    expect(
      screen.getByRole("button", { name: `View ${experiencePropsB.title}` })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: `View ${experiencePropsC.title}` })
    ).toBeInTheDocument();
    expect(() =>
      screen.getByRole("button", { name: `View ${experiencePropsA.title}` })
    ).toThrow();

    fireEvent.click(
      screen.getByRole("button", { name: `View ${experiencePropsB.title}` })
    );

    expect(
      screen.getByRole("button", { name: `View ${experiencePropsA.title}` })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: `View ${experiencePropsC.title}` })
    ).toBeInTheDocument();
    expect(() =>
      screen.getByRole("button", { name: `View ${experiencePropsB.title}` })
    ).toThrow();
  });
});
