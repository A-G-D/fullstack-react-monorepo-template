import type { Meta, StoryObj } from "@storybook/react";

import { Spinner } from "./index.tsx";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
  args: {},
};
