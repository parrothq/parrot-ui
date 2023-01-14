import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Box from "./box";

export default {
  title: "Box",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithChildren = Template.bind({});
WithChildren.args = {};
