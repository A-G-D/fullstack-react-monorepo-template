import classNames from "classnames";
import type { HTMLAttributes } from "react";

import { useScrollFlag } from "@/lib/hooks";

import { Footer } from "./Footer";
import { Header } from "./Header";

export type MainLayoutProps = HTMLAttributes<HTMLElement>;

export function MainLayout({ children, className, ...props }: MainLayoutProps) {
  const scrolledFlag = useScrollFlag();

  return (
    <section
      className="flex min-h-screen flex-col items-stretch overflow-x-hidden"
      {...props}
    >
      <Header
        className={classNames("fixed top-0 z-[100] w-full", {
          "bg-white": scrolledFlag,
          "text-white": !scrolledFlag,
        })}
      />
      <main className={classNames("flex-auto", className)}>{children}</main>
      <Footer />
    </section>
  );
}
