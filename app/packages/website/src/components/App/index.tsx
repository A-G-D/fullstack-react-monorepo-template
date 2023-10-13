import { Component } from "@monorepo/shared/dist";
import classNames from "classnames";
import { useCallback, useState } from "react";

import { useInterval } from "@/lib/hooks";

import { MainLayout } from "../../layouts";
import { Button } from "../ui/button";

export default function App() {
  const [carouselPageIndex, setCarouselPageIndex] = useState(0);

  const periodicCallback = useCallback(() => {
    setCarouselPageIndex((index) => (index + 1) % 3);
  }, []);

  useInterval(periodicCallback, 2000);

  return (
    <MainLayout className="flex flex-col bg-blue-600">
      <Component className="relative h-screen w-full">
        <Component className="absolute flex h-full w-full flex-col items-center justify-center gap-8">
          <h2 className="text-center text-3xl font-semibold text-white">
            Explore Products
          </h2>
          <Button>
            <a href="/shop" target="_blank">
              Go to Shop
            </a>
          </Button>
        </Component>
        <Component className="h-full w-full bg-black" />
      </Component>
      <Component className="relative h-screen w-screen bg-gray-400">
        <h3
          className="absolute z-[1] px-8 py-4 font-semibold uppercase text-white"
          id="features"
        >
          Featured Sales:
        </h3>
        <Component
          className={classNames(
            "relative flex h-full w-[300%] transition-[left] duration-300",
            ["-left-0", "-left-[100%]", "-left-[200%]"][carouselPageIndex],
          )}
        >
          <Component className="h-full w-full bg-red-500" />
          <Component className="h-full w-full bg-green-500" />
          <Component className="h-full w-full bg-blue-500" />
        </Component>
      </Component>
    </MainLayout>
  );
}
