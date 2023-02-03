import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Column from "./column";

export default {
  title: "Grid Item",
  component: Column,
} as ComponentMeta<typeof Column>;

const Template: ComponentStory<typeof Column> = (args) => <Column {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithChildren = Template.bind({});
WithChildren.args = {};
