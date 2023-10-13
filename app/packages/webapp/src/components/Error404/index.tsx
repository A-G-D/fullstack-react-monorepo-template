import classNames from "classnames";
import type { HTMLAttributes } from "react";

export type Error404Props = Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function Error404({ className, ...props }: Error404Props) {
  return (
    <div
      className={classNames(
        "flex h-full w-full flex-col items-center justify-center gap-4 bg-red-100 text-red-800",
        className,
      )}
      {...props}
    >
      <h2 className="text-2xl font-semibold">Error 404</h2>
      <p className="text-lg">Page Not Found</p>
    </div>
  );
}
