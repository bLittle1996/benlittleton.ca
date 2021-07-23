import Link, { LinkProps } from "next/link";
import Logo from "./Logo";

export type Link = LinkProps & {
  text: string;
};

export interface HeaderProps {
  links?: Link[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header className="max-w-7xl mx-auto px-8 py-8 flex justify-between">
      <Logo />
      {links && links.length > 0 && (
        <nav className="flex items-center justify-center">
          <ul>
            {links.map((link) => {
              const { text, ...linkProps } = link;
              return (
                <li key={text} className="inline mr-4 last:mr-0">
                  <Link {...linkProps}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
