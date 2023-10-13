import classNames from "classnames";
import Link from "next/link";
import { type HTMLAttributes, useMemo } from "react";

export type HeaderProps = Omit<HTMLAttributes<HTMLElement>, "children">;

const navLinks = [{ label: "About", url: "/about" }];

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
        "flex items-center justify-between bg-violet-800 px-8 py-4",
        className,
      )}
      {...props}
    >
      <Link href="/">
        <h1 className="text-2xl font-semibold uppercase">Marketplace</h1>
      </Link>
      <nav>
        <ul className="flex items-center gap-4">{navList}</ul>
      </nav>
    </header>
  );
}
