import React from "react";
import IconTab from "../components/IconTab";
import { ReactComponent as GitHubIcon } from "./assets/icon-github.svg";

export default {
  title: "Components/Tabs/IconTab",
  component: IconTab,
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

const Template = (args) => <IconTab {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <GitHubIcon />,
};

export const Active = Template.bind({});
Active.args = {
  icon: <GitHubIcon />,
  isActive: true,
};
