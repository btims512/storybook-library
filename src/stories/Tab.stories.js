import React from "react";
import Tab from "../components/Tab";

export default {
  title: "Components/Tabs/Text",
  component: Tab,
  argTypes: {
    onClick: { action: "clicked" },
  },
  parameters: {
    // Set story order
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
