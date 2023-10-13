import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-auto flex-col items-stretch p-8">{children}</div>
  );
}
