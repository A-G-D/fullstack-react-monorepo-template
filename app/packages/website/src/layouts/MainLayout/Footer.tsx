import classNames from "classnames";
import type { HTMLAttributes } from "react";

export type FooterProps = Omit<HTMLAttributes<HTMLElement>, "children">;

export function Footer({ className, ...props }: FooterProps) {
  return (
    <footer
      className={classNames("flex flex-col items-center p-8", className)}
      {...props}
    >
      <p className="text-center">Copyright (C) 2023 Aloever Dulay</p>
    </footer>
  );
}
