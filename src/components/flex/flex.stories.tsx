import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Flex from "./flex";

export default {
  title: "Flex",
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithChildren = Template.bind({});
WithChildren.args = {};
