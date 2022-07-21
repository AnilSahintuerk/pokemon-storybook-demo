import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Home } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Pages/Home",
  component: Home,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Home>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const CenteredAndVertical = Template.bind({});
CenteredAndVertical.args = {
  centered: true,
  vertical: true,
};

export const CenteredOnly = Template.bind({});
CenteredOnly.args = {
  centered: true,
  vertical: false,
};

export const VerticalOnly = Template.bind({});
VerticalOnly.args = {
  centered: false,
  vertical: true,
};

export const Neither = Template.bind({});
Neither.args = {
  centered: false,
  vertical: false,
};
