import classNames from "classnames";
import type { HTMLAttributes } from "react";

export type FooterProps = Omit<HTMLAttributes<HTMLElement>, "children">;

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={classNames(
        "flex flex-col items-center gap-6 px-8 py-4 bg-violet-400",
        className,
      )}
      {...props}
    >
      <p className="text-center text-2xl uppercase">
        Copyright © 2023 Aloever Dulay
      </p>
    </footer>
  );
}
