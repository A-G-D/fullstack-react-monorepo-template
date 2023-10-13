import type { Meta, StoryObj } from "@storybook/react-native";

import { App } from "./App";

const meta: Meta<typeof App> = {
  component: App,
  title: "App",
};
export default meta;

type Story = StoryObj<typeof App>;

export const Primary: Story = {
  args: {},
};
