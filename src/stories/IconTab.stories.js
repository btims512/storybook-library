import React from "react";
import IconTab from "../components/IconTab";
import { ReactComponent as GitHubIcon } from "../stories/assets/icon-github.svg";

export default {
  title: "Components/IconTab",
  component: IconTab,
  argTypes: {
    onClick: { action: "clicked" },
  },
  parameters: {
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
