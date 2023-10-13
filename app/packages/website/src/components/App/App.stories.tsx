import type { Meta, StoryObj } from "@storybook/react";

import App from "./index";

const meta: Meta<typeof App> = {
  component: App,
};

export default meta;
type Story = StoryObj<typeof App>;

export const Primary: Story = {
  args: {
    children: "A",
    className: "gap-4 bg-red-200",
  },
};
