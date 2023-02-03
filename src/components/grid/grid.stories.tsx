import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Grid from "./grid";

export default {
  title: "Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithChildren = Template.bind({});
WithChildren.args = {};
