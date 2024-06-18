import React from "react";
import Tab from "../components/Tab";

export default {
  title: "Components/Tabs",
  component: Tab,
  argTypes: {
    onClick: { action: "clicked" },
  },
  parameters: {
    storySort: {
      order: 100,
    },
  },
};

const Template = (args) => <Tab {...args} />;

export const TextTab = Template.bind({});
TextTab.args = {
  label: "Tab",
};

export const Active = Template.bind({});
Active.args = {
  label: "Tab",
  isActive: true,
};
