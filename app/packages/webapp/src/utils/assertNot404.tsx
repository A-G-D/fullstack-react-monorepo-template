import { notFound } from "next/navigation";

export const assertNot404 = (status: number) => {
  if (status === 404) {
    notFound();
  }
};
