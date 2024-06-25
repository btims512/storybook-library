import React from "react";
import ProgressBar from "../components/ProgressBar";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    progress: {
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
    label: { control: "text" },
    color: { control: "color" },
  },
};

const Template = (args) => {
  const updatedArgs = {
    ...args,
    label: `${args.progress}%`,
  };
  return <ProgressBar {...updatedArgs} />;
};

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  color: "var(--primary-brand)",
};
