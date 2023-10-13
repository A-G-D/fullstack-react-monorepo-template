"use client";

import { Spinner } from "@monorepo/shared/dist";

export default function Loading() {
  return (
    <div className="flex min-h-full min-w-full flex-auto items-center justify-center">
      <Spinner className="self-center justify-self-center" />
    </div>
  );
}
