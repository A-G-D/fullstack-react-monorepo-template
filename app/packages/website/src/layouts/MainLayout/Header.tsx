import classNames from "classnames";
import { type HTMLAttributes, useMemo } from "react";

export type HeaderProps = Omit<HTMLAttributes<HTMLElement>, "children">;

const navLinks = [{ label: "Explore", url: "#features" }];

export function Header({ className, ...props }: HeaderProps) {
  const navList = useMemo(
    () =>
      navLinks.map(({ label, url }) => (
        <li key={`${label}::${url}`}>
          <a className="uppercase" href={url}>
            {label}
          </a>
        </li>
      )),
    [],
  );

  return (
    <header
      className={classNames(
        "flex items-center justify-between px-8 py-4",
        className,
      )}
      {...props}
    >
      <h1 className="select-none text-2xl font-semibold uppercase">
        Marketplace
      </h1>
      <nav>
        <ul className="flex items-center gap-4">{navList}</ul>
      </nav>
    </header>
  );
}
