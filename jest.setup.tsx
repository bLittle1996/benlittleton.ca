import "@testing-library/jest-dom";
import * as NextImage from "next/image";
import { ImageProps } from "next/image";

const ActualNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  // eslint-disable-next-line react/display-name
  value: (props: ImageProps) => (
    <ActualNextImage {...props} unoptimized placeholder="empty" layout="fill" />
  ),
});

// This isn't implemented in JSDOM so let's do it ourselves!
if (global.HTMLElement) {
  HTMLElement.prototype.scrollIntoView = jest.fn();
}
