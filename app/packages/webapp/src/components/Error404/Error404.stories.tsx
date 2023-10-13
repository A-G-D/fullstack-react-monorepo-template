import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./index";

const meta: Meta<typeof Error404> = {
  component: Error404,
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Primary: Story = {
  args: {},
};
