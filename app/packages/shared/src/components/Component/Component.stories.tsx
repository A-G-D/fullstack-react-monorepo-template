import type { Meta, StoryObj } from "@storybook/react";

import { Component } from "./index";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    children: "A",
    className: "w-[200px] h-[200px] bg-red-200",
    loading: false,
    onResizeElement: () => {
      console.log("onResizeElement()");
    },
  },
};

export const Loading: Story = {
  args: {
    children: "A",
    className: "w-[200px] h-[200px] bg-red-200",
    loading: true,
    onResizeElement: () => {
      console.log("onResizeElement()");
    },
  },
};
